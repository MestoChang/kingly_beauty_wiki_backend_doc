---
title: 管理員帳號及身分權限說明
sidebar_position: 0
# tags: [管理員帳號]
---

# 管理員帳號及身分權限說明

說明管理員帳號與身份權限之間的關係及如何設定。

## 管理員帳號說明

:::info 重要說明
管理員帳號依性質分數個等級，主要規範帳號可以進入哪些平台的限制。
:::

### 帳號權限級別

| 項目 | 類型                              | 忘記密碼的操作                                     | 系統權限限制                                                                                                                                 |
| ---- | --------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| S    | 資料庫管理員                      | 沒救了                                             | 可新增全層級管理帳號。<br />可解除凍結全層級的管理帳號。<br />可停用全層級的管理帳號。                                                       |
| A    | 超級管理員                        | e-mail 及 PIN 雙重認證 (PIN 碼須從上級管理員取得） | 全域皆可管理。<br />可新增 B級及以下的管理帳號。<br />可解除凍結 B級及以下的管理帳號。<br />可停用 B級及以下的管理帳號。                     |
| B    | 高權限管理員                      | e-mail 及 PIN 雙重認證 (PIN 碼須從上級管理員取得） | 除原設定平台外亦可進全域管理平台。<br />可新增 C級及以下的管理帳號。<br />可解除凍結 C級及以下的管理帳號。<br />可停用 C級及以下的管理帳號。 |
| C    | 一般管理員                        | e-mail 重設                                        | 僅開放單一平台權限<br/>（如全域平台的行校數據分析僅可登入全域平台，不可進美容百科平台）。                                                    |
| D    | 其他特定身分<br/>第三方店家廠商等 | e-mail 重設                                        | 從前端網站登入的特別身分會員帳號，如：講師帳號、商家帳號等。                                                                                 |

<br/>

:::note 操作功能設定限制

除了帳號層級影響進入平台權限外，部分操作功能也有帳號層級的限制：

-   內文管理：審核文章，永久刪除文章
-   媒體庫：永久刪除媒體，新增媒體類別

這些功能都必須 B 級以上的帳號（高權限管理員）才能設定。
:::

<br/>

### 帳號狀態說明

管理員帳號有三種狀態：正常、凍結、停用。

| 狀態 | 說明                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------ |
| 正常 | 可使用                                                                                                                         |
| 凍結 | 密碼輸入錯誤 5 次後帳號會被凍結，需使用 PIN 碼(註1) 解除凍結。<br /> 操作流程參考 [凍結帳號處理](../account/lock-account.md)。 |
| 停用 | 暫停使用(註2)的帳號。<br/>停用後的帳號無法登入亦無法操作任何功能。                                                             |

-   註1：PIN 碼解除凍結的功能尚未開發。
-   註2：停用帳號功能尚未開發。

## 身分權限說明

:::info 重要說明
身分影響的是『可以操作的功能』，簡單說就是設定一個身份職稱 -> 規範這個職稱可進行的功能操作。
:::
<br/>

### 身份權限與帳號的關係

:::danger 限制
帳號只能設定與自己同級別的身份職位！！<br/>
例如：『美容百科主管』這個身份職位的等級是 B，那只有帳號等級 B 的帳號才可以綁定這個身份。
:::
<br/>

> 詳細新增身份步驟參考 [如何新增身份](./how-to-add-a-role.md)。

1. 例如說新增一個身分稱為『美容百科小編』，然後在小編這個身份下面設定相關權限：網站設定、發表文章、新增媒體、關鍵字管理、留言管理等功能，參考下圖：

    ![身份權限說明](img/role-intro-01.png)

2. 之後新增管理員帳號時，就可以從職稱設定這邊快速選取『美容百科小編』這個身份，下方就會自動帶入原先設定好的『美容百科小編』操作功能。
   ![身份權限說明](img/role-intro-02.png)

3. 除了身份設定後直接帶入的權限操作功能以外，管理員帳號本身還可以自行增減其他功能權限，但依照帳號本身等級有選擇限制，參考 [帳號權限級別](#帳號權限級別)的說明。

    - 比如說管理員帳號 cct516 的帳號等級為 C 級，只有單一平台的使用權限，所以在設定權限這裡系統會限制無法選擇全域平台相關權限，也不能選擇 B 級以上才能選擇的審核及永久刪除等權限。

        ![身份權限說明](img/role-intro-03.png)

### 目前規劃的身份

暫時先訂出美容百科可能需要的身份及操作功能（部分功能尚未開發完成），也可以依照需求建立身份職稱，參考[如何新增身份](./how-to-add-a-role.md)。

| 權限級別 | 身份                    | 功能權限                                     | 補充說明                                                                             |
| -------- | ----------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------ |
| B        | 平台管理員              | 平台內全部功能管理。可新增平台下的管理帳號。 |
| C        | 內容小編                | 主題內容管理, 媒體庫, 章節管理, 留言管理。   |
| C        | 課程管理                | 專欄課程管理。可新增/編輯/停用講師帳號。     |
| C        | 客服人員                | 會員管理, 交易管理                           |
| C        | 行銷數據分析員          | 瀏覽會員資料, 交易紀錄及平台金流狀況。       |
| C        | 行銷人員                | 更換 Banner, 廣告管理, SEO設定。             |
| D        | (外部合作)<br/>授課講師 | 編輯個人資料、經歷等。                       | 如果有外部合作需求，預計是要規劃額外網站入口網站給外部使用，不直接進目前的後台系統。 |
| D        | (外部合作)<br/>課程助教 | 協助講師回答問題，編輯課程說明及課程附件等。 | 如果有外部合作需求，預計是要規劃額外網站入口網站給外部使用，不直接進目前的後台系統。 |
