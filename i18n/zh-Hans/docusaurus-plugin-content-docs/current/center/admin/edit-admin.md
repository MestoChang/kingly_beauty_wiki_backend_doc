---
title: 修改管理员权限
sidebar_position: 1.2
---

# 修改管理员权限

新增管理员的时候仅可绑定一个身份（即开通身份所设定的操作权限），但后续可以替每个帐号做个别设定，但可设定的功能遵守帐号等级的规范，参考[管理员帐号及身分权限说明](./administer-rules.md)，功能操作权限有帐号等级的区分与限制。

1.  选择要编辑的管理员
    ![编辑管理员](img/edit-admin-01.png)

2.  进入管理员页面，会发现不是所有栏位都可以编辑
    :::warning 限制说明
    无法调整功能操作，有两种可能：

    -   情况一：整个区块的栏位都不给编辑 -> 目前操作的这个帐号，权限不足以设定所选择的帐号。
    -   情况二：部分功能栏位不给编辑 -> 这个帐号权限等级无法操作此功能。
        :::

    -   情况一：A 级已是最高的管理员，除了资料库管理员，没有其他帐号有权限可以去修改这个帐号的操作功能。
        ![编辑管理员](img/edit-admin-02.png)
        整个区块都不能编辑：
        ![编辑管理员](img/edit-admin-03.png)

    -   情况二：换个等级 C 的帐号，就会发现出现比较多可以编辑的功能：
        ![编辑管理员](img/edit-admin-02-01.png)
        仅部分功能栏位因权限等级而不可编辑：
        ![编辑管理员](img/edit-admin-02-02.png)

3.  修改完毕，点选　保存变更
    ![编辑管理员](img/edit-admin-02-03.png)