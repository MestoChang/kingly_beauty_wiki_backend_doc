---
title: 後台系統功能清單
sidebar_position: 4
---

# 後台系統功能清單

截至 2024.10.17 功能開發狀況及預期後續開發方向說明。

### 標示說明

-   [x] 功能 AAA -> 已完成，目前後台可操作
-   [ ] 功能 BBB -> 已規劃待開發，或者開發測試中，尚未更新穩定版本。

:::info 色塊標示 -> 需相關人員提供資料才能進行後續的功能開發。
:::

:::note 色塊標示 -> 優化方向。
:::

<br/>

---

## 功能項目

列出目前已有規劃的主要功能模組，以及目前已想到後續延伸擴展的方向。

### Dashboard

-   [x] 登入平台後預設顯示此頁。
-   [ ] 顯示網站營運狀況、會員數量等數據。

        :::info 分析數據
        畫面上具體要顯示哪些數據，依照市場/營運人員需求。
        :::

### 網站設定

-   [ ] 可編輯網站相關設定：title、siteLogo、siteIcon、shareImg 及 description
-   [ ] SEO 相關設定 - 預計會按照主要頁面區分，如首頁、文章列表、課程列表等頁面。- 每個頁面可獨立設定 meta Title、meta Keywords、meta Description
-   [x] Banner 設定：更換首頁輪播圖、圖片鏈接。

        :::info SEO
        看行銷人員是否有其他關於 SEO 推廣的相關建議可提供。
        :::

### 會員管理

-   [x] 會員列表
    -   顯示目前會員列表及會員狀況。
    -   搜索會員名稱與email
-   [x] 會員資訊
    -   顯示會員資訊：帳號資料、會員資料、顯示暱稱、會員已開通的平台
    -   顯示各種紀錄：瀏覽記錄、留言紀錄、按讚及收藏紀錄，金流交易紀錄等。
-   [ ] 會員權限設定
    -   影響設定文章是否需要設定閱讀權限
-   [ ] 會員等級制度
    -   是否隨著會員活躍度升級

:::info 會員制度規劃
會員後續的管理操作：獎勵、警告不當使用等，需要等比較完整的會員權限、等級這些規則訂定後才能開發。
:::

-   [ ] 個資授權書：管理每個會員的個人資料授權的文件，記錄上傳時間及版本號，傳入 doc 檔且保留可下載的彈性。

:::info 個資授權同意書的內容需依照各地區法律限制調整。
:::

### 主題內容管理

-   [x] 章節管理：可新增、刪除章節及設定章節內關鍵字，目前限制最多6個章，每張10個小節/關鍵字。
-   [x] 文章列表

    -   可檢視、變更文章狀態、依照狀態篩選文章。狀態相關說明參考[文章狀態與限制說明](/docs//beauty/content/article-status.md)。
    -   按時間排序、設定文章置頂等功能。
    -   邊攔顯示章節列表可點擊關鍵字篩選文章。
    -   新增文章、文章編輯等頁面功能細節參考[文章欄位限制與說明](/docs/beauty/content/article-content-limit.md)。

### 媒體庫

-   [x] 可新增媒體類別。
-   [x] 可新增/編輯/停用媒體，參考 [媒體狀態及類別說明](/docs/beauty/media/media-status.md)。
-   [x] 可刪除/永久刪除媒體。

:::note 優化方向
如何更方便篩選找到自己要的圖片，尤其在編輯文章那頁的操作。
:::

### 留言管理

-   [x] 顯示全部留言，按照時間/標記/狀態排序，可篩選狀態。
-   [x] 可檢視個別留言內容，隱藏/取消隱藏留言。
-   [ ] 留言獎勵設定。
-   [ ] 標記最佳留言及發放獎勵。

:::note 優化方向
敏感詞彙偵測功能，一但從內容偵測到敏感詞，前段就直接打碼。
需要增加設定敏感詞的欄位功能。
:::

:::info 獎勵制度
須參考會員等級／權限設定及交易管理／優惠券等相關規劃，再看如何配合執行。
:::

### 關鍵字管理

-   [x] 關鍵字群組：建立簡單群組功能分類關鍵字
-   [x] 關鍵字列表，可依照平台、群組篩選，可排序、搜尋，可新增關鍵字。

:::note 優化方向
後續進一步增加關鍵字群組的功能應用，如加強搜索功能應用等。
:::

### 廣告管理

-   [ ] 廣告欄位管理，編輯各個頁面的廣告欄位媒體限制，設定欄位尺寸、輪播時間，以及可以設定欄位哪些特定關鍵字優先播放。
-   [x] 廣告專案管理：檢視廣告狀態，可依照時間排序，可新增/編輯廣告專案，可依照名稱搜尋。

:::info 廣告方案

-   目前是設定可以只有設定日期區間管理廣告的顯示，詳細的應用方式及流程可依業務需求調整。
-   欄位的位置也可依照需求彈性調整。
    :::

### 會員通知系統(未開始規劃)

處理系統內部通知，諸如發表的留言被點讚，或者系統回饋每日登入獎勵等。

### 交易管理(未開始規劃)

:::info 希望由運營人員提出功能需求，比較有開發方向。
:::

-   檢視全部交易列表
-   檢視單筆交易紀錄
-   交易失敗的處理？

### 優惠碼管理(未開始規劃)

:::info 希望由運營人員提出功能需求，比較有開發方向。
:::