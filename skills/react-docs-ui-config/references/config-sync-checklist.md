# 配置同步检查清单

当用户修改生成后的 docs 项目配置文件时，用这份清单提醒他保持一致性。

## 语言同步

- 修改中文站点行为或文案时，更新 `public/config/site.yaml`
- 修改英文站点行为或文案时，更新 `public/config/site.en.yaml`
- 如果新增顶部导航项，`site.yaml` 中该导航项名称使用中文，`site.en.yaml` 中使用英文
- 如果站点要长期保持双语一致，导航结构通常也应该同步

## 路径一致性

- `navbar` 或 `sidebar` 中引用的路径，必须在 `public/docs/<lang>/` 下有对应文档文件
- 侧边栏里的 `path` 要和真实文件路径保持一致
- 如果某个页面要出现在导航中，就要同时修改配置和文档文件

## 导航对应关系

- `navbar.items.link` 要和 `sidebar.collections` 所代表的文档区域对应起来
- 例如顶部导航是 `/docs`，则通常应有 `sidebar.collections.docs`
- 对应 collection 下的 `sections` 和 `children` 路径，通常也应保持在 `/docs/...` 区域下
- 不要出现顶部导航进入 `/docs`，但侧边栏却管理 `/guide/...` 或其他无关区域的情况

## 编辑约定

- 优先做最小改动
- 能保持原有配置块顺序时尽量保持
- 不要把中文文案写进 `site.en.yaml`
- 不要把英文文案写进 `site.yaml`