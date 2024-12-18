---
title: 后台系统功能清单
sidebar_position: 1
---

# 后台系统功能清单

截至 2024.10.17 功能开发状况及预期后续开发方向说明。

### 标示说明

-   [x] 功能 AAA -> 已完成，目前后台可操作
-   [ ] 功能 BBB -> 已规划待开发，或者开发测试中，尚未更新稳定版本。

:::info 色块标示 -> 需相关人员提供资料才能进行后续的功能开发。
:::

:::note 色块标示 -> 优化方向。
:::

<br/>

---

## 功能项目

列出目前已有规划的主要功能模组，以及目前已想到后续延伸扩展的方向。

### Dashboard

-   [x] 登入平台后预设显示此页。
-   [ ] 显示网站营运状况、会员数量等数据。

:::info 分析数据
画面上具体要显示哪些数据，依照市场/营运人员需求。
:::

### 网站设定

-   [ ] 可编辑网站相关设定：title、siteLogo、siteIcon、shareImg 及 description
-   [ ] SEO 相关设定 - 预计会按照主要页面区分，如首页、文章列表、课程列表等页面。 - 每个页面可独立设定 meta Title、meta Keywords、meta Description
-   [x] Banner 设定：更换首页轮播图、图片链接。

:::info SEO
看行销人员是否有其他关于 SEO 推广的相关建议可提供。
:::

### 会员管理

-   [x] 会员列表
    -   显示目前会员列表及会员状况。
    -   搜索会员名称与email
-   [x] 会员资讯
    -   显示会员资讯：帐号资料、会员资料、显示昵称、会员已开通的平台
    -   显示各种纪录：浏览记录、留言纪录、按赞及收藏纪录，金流交易纪录等。
-   [ ] 会员权限设定
    -   影响设定文章是否需要设定阅读权限
-   [ ] 会员等级制度
    -   是否随着会员活跃度升级

:::info 会员制度规划
会员后续的管理操作：奖励、警告不当使用等，需要等比较完整的会员权限、等级这些规则订定后才能开发。
:::

-   [ ] 个资授权书：管理每个会员的个人资料授权的文件，记录上传时间及版本号，传入 doc 档且保留可下载的弹性。

:::info 个资授权同意书的内容需依照各地区法律限制调整。
:::

### 主题内容管理

-   [x] 章节管理：可新增、删除章节及设定章节内关键字，目前限制最多6个章，每张10个小节/关键字。
-   [x] 文章列表

    -   可检视、变更文章状态、依照状态筛选文章。状态相关说明参考[文章状态与限制说明](/docs//beauty/content/article-status.md)。
    -   按时间排序、设定文章置顶等功能。
    -   边拦显示章节列表可点击关键字筛选文章。
    -   新增文章、文章编辑等页面功能细节参考[文章栏位限制与说明](/docs/beauty/content/article-content-limit.md)。

:::note 优化方向

-   关键字设定的部分，希望可以多层级设定，如第一层标记大分类，第二层标记小分类，第三层标记文章内容特色。
    :::

### 媒体库

-   [x] 可新增媒体类别。
-   [x] 可新增/编辑/停用媒体，参考 [媒体状态及类别说明](/docs/beauty/media/media-status.md)。
-   [x] 可删除/永久删除媒体。

:::note 优化方向

-   如何更方便筛选找到自己要的图片，尤其在编辑文章那页的操作。

:::

### 留言管理

-   [x] 显示全部留言，按照时间/标记/状态排序，可筛选状态。
-   [x] 可检视个别留言内容，隐藏/取消隐藏留言。
-   [ ] 留言奖励设定。
-   [ ] 标记最佳留言及发放奖励。

:::note 优化方向
敏感词汇侦测功能，一但从内容侦测到敏感词，前段就直接打码。
需要增加设定敏感词的栏位功能。
:::

:::info 奖励制度
须参考会员等级／权限设定及交易管理／优惠券等相关规划，再看如何配合执行。
:::

### 关键字管理

-   [x] 关键字群组：建立简单群组功能分类关键字
-   [x] 关键字列表，可依照平台、群组筛选，可排序、搜寻，可新增关键字。

:::note 优化方向
后续进一步增加关键字群组的功能应用，如加强搜索功能应用等。
:::

### 广告管理

-   [ ] 广告栏位管理，编辑各个页面的广告栏位媒体限制，设定栏位尺寸、轮播时间，以及可以设定栏位哪些特定关键字优先播放。
-   [x] 广告专案管理：检视广告状态，可依照时间排序，可新增/编辑广告专案，可依照名称搜寻。

:::info 广告方案

-   目前是设定可以只有设定日期区间管理广告的显示，详细的应用方式及流程可依业务需求调整。
-   栏位的位置也可依照需求弹性调整。
    :::

### 会员通知系统(未开始规划)

处理系统内部通知，诸如发表的留言被点赞，或者系统回馈每日登入奖励等。

### 交易管理(未开始规划)

:::info 希望由运营人员提出功能需求，比较有开发方向。
:::

-   检视全部交易列表
-   检视单笔交易纪录
-   交易失败的处理？

### 优惠码管理(未开始规划)

:::info 希望由运营人员提出功能需求，比较有开发方向。
:::
