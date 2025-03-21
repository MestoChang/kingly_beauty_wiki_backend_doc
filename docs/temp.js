// C006 POST 儲存運動紀錄
saveRecord = [
    {
        // 課程
        日期時間: "2025.01.01 18:35:47",
        course: "課程名稱",
        course_id: "課程ID",

        // 紀錄每個課程的開始與結束時間,之後換算成執行時長
        開始時間: "",
        結束時間: "",

        運動強度: "2", // 運動強度
        運動後感受: "輕鬆",
        心率: "",
        動作列表: [
            {
                // 動作
                動作名稱: "",
                動作ID: "",
                // 完成動作數
                完成組數: "3", // 計次計秒相同，按照　完成組(回合)數/全部組(回合)數 計算完成度
            },
        ],
    },
    {
        // 課程
    },
];

// C007 GET 運動紀錄

record = {
    日期時間: "2025.01.01 18:35:47",
    當日運動時長: "45", // 分鐘
    當日課程完成度: "", // 加總平均每個課程完成度
    當日消耗總卡路里: "754",
    運動內容: [
        {
            // 課程
            課程名稱: "",
            課程ID: "",
            課程完成度: "", // 把每個動作的完成度加總，除以動作數得到平均值作為課程完成度
            運動時間: "",
            運動執行時長: "",
            消耗卡路里: "", // 運動時間(hr) x METs x 體重(kg)
            心率: "",
            運動後感受: "輕鬆",
            動作列表: [
                {
                    動作名稱: "",
                    動作ID: "",
                    完成度: "",
                },
                {
                    // 動作
                },
            ],
        },
        {
            // 課程
        },
    ],
};
