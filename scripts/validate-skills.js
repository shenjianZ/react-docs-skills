#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');

// 必需的文件和目录
const REQUIRED_FILES = {
  root: ['SKILL.md'],
  agents: ['agents/openai.yaml'],
  references: ['references']
};

// 验证单个技能
function validateSkill(skillPath) {
  const skillName = path.basename(skillPath);
  const errors = [];
  const warnings = [];

  console.log(`\n验证技能: ${skillName}`);

  // 检查必需的文件
  for (const category of Object.keys(REQUIRED_FILES)) {
    const items = REQUIRED_FILES[category];
    for (const item of items) {
      const filePath = path.join(skillPath, item);
      if (!fs.existsSync(filePath)) {
        errors.push(`缺少必需文件: ${item}`);
      }
    }
  }

  // 验证 SKILL.md
  const skillMdPath = path.join(skillPath, 'SKILL.md');
  if (fs.existsSync(skillMdPath)) {
    const content = fs.readFileSync(skillMdPath, 'utf-8');
    if (!content.includes('#')) {
      warnings.push('SKILL.md 缺少标题');
    }
  }

  // 验证 openai.yaml
  const agentConfigPath = path.join(skillPath, 'agents', 'openai.yaml');
  if (fs.existsSync(agentConfigPath)) {
    try {
      const config = yaml.parse(fs.readFileSync(agentConfigPath, 'utf-8'));
      if (!config.interface?.display_name) {
        errors.push('openai.yaml 缺少 interface.display_name');
      }
      if (!config.interface?.short_description) {
        errors.push('openai.yaml 缺少 interface.short_description');
      }
    } catch (e) {
      errors.push(`openai.yaml 解析失败: ${e.message}`);
    }
  }

  // 检查 references 目录是否为空
  const refsPath = path.join(skillPath, 'references');
  if (fs.existsSync(refsPath)) {
    const refFiles = fs.readdirSync(refsPath).filter(f => f.endsWith('.md'));
    if (refFiles.length === 0) {
      warnings.push('references 目录为空，建议添加参考文档');
    }
  }

  return { skillName, errors, warnings };
}

// 主函数
function main() {
  console.log('开始验证 Skills...\n');

  if (!fs.existsSync(SKILLS_DIR)) {
    console.error('❌ skills 目录不存在');
    process.exit(1);
  }

  const skills = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  if (skills.length === 0) {
    console.error('❌ 没有找到任何技能');
    process.exit(1);
  }

  console.log(`找到 ${skills.length} 个技能\n`);

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const skill of skills) {
    const { skillName, errors, warnings } = validateSkill(path.join(SKILLS_DIR, skill));

    if (errors.length === 0 && warnings.length === 0) {
      console.log(`✅ ${skillName} - 验证通过`);
    } else {
      console.log(`⚠️  ${skillName}:`);
      for (const error of errors) {
        console.log(`  ❌ ${error}`);
        totalErrors++;
      }
      for (const warning of warnings) {
        console.log(`  ⚠️  ${warning}`);
        totalWarnings++;
      }
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`验证完成: ${skills.length} 个技能`);
  console.log(`错误: ${totalErrors}`);
  console.log(`警告: ${totalWarnings}`);

  if (totalErrors > 0) {
    console.log('\n❌ 验证失败');
    process.exit(1);
  } else {
    console.log('\n✅ 所有技能验证通过');
    process.exit(0);
  }
}

main();