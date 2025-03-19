// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// 判斷當前環境是否是 vercel 還是 github pages
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL === "true";
// const isVercel = process.env.VERCEL === "true";
// const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "後臺管理系統教學",
    tagline:
        "此為後臺管理系統架構規劃文件，包含平台各項功能子系統說明及操作教學。",
    favicon: "img/favicon.ico",

    // tell search engine not to index
    noIndex: true, // 默认为 `false`

    // in vercel
    // url: "https://kingly-beauty-wiki-backend-doc.vercel.app",
    // baseUrl: "/",

    // 設定 github page 相關 start
    // url: "https://mestochang.github.io/kingly_beauty_wiki_backend_doc/",
    // baseUrl: "/kingly_beauty_wiki_backend_doc/",

    // !!! 多語系建構時會影響這個網址判斷， 需要調整

    url: isVercel
        ? "https://kingly-beauty-wiki-backend-doc.vercel.app"
        : "https://kingly_beauty_wiki_backend_doc.github.io",
    baseUrl: isVercel ? "/" : "/kingly_beauty_wiki_backend_doc/",

    organizationName: "mestochang",
    projectName: "kingly_beauty_wiki_backend_doc",
    // 設定 github page 相關 end

    // 'ignore' 允許建構失敗仍繼續，或者 'log' 來記錄錯誤但不阻止構建, throw 來拋出錯誤
    onBrokenLinks: "log",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".

    i18n: {
        defaultLocale: "zh-Hant", // "en"
        locales: ["zh-Hant", "zh-Hans"],
        localeConfigs: {
            "zh-Hant": {
                label: "繁體中文",
                direction: "ltr",
                htmlLang: "zh-Hant",
            },
            "zh-Hans": {
                label: "简体中文",
                direction: "ltr",
                htmlLang: "zh-Hans",
            },
        },
    },

    stylesheets: [
        {
            href: "./src/css/custom.css",
            type: "text/css",
        },
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",

                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                // blog: {
                //     showReadingTime: true,
                //     feedOptions: {
                //         type: ["rss", "atom"],
                //         xslt: true,
                //     },
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                //     // Useful options to enforce blogging best practices
                //     onInlineTags: "warn",
                //     onInlineAuthors: "warn",
                //     onUntruncatedBlogPosts: "warn",
                // },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

        ({
            // Replace with your project's social card
            // image: "static/img/docusaurus-social-card.jpg",

            navbar: {
                title: "後臺管理系統教學",
                // logo: {
                //     alt: "My Site Logo",
                //     src: "static/img/logo.svg",
                // },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "說明文件指南",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "centerSidebar",
                        position: "left",
                        label: "全域平台",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "beautySidebar",
                        position: "left",
                        label: "美容百科",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "sportSidebar",
                        position: "left",
                        label: "運動百科",
                    },

                    // { to: "/blog", label: "Blog", position: "left" },

                    // 切換語系下拉選單
                    {
                        type: "localeDropdown",
                        position: "right",
                        className: "custom-locale-switcher",
                    },
                    // {
                    //     href: "https://kingly_beauty_wiki_backend_doc.github.io",
                    //     label: "GitHub",
                    //     position: "right",
                    // },
                ],
            },
            docs: {
                sidebar: {
                    hideable: true,
                },
            },
            footer: {
                style: "light",
                links: [
                    {
                        title: "網站連結",
                        items: [
                            {
                                label: "後台管理系統入口",
                                to: "https://wiki.kinglyrobot.com/",
                            },
                            {
                                label: "美容百科網站",
                                to: "https://beauty.kinglyrobot.com/",
                            },

                            {
                                label: "運動百科網站",
                                to: "https://sport.kinglyrobot.com/",
                            },
                        ],
                    },
                    {
                        title: "相關文件連結",
                        items: [
                            {
                                label: "美容百科前端網站說明",
                                to: "https://kingly-beauty-wiki-frontend-doc.vercel.app/",
                            },
                            {
                                label: "後台管理系統教學",
                                to: "https://kingly-beauty-wiki-backend-doc.vercel.app/",
                            },
                        ],
                    },
                    // {
                    //     title: "Links",
                    //     items: [
                    //         {
                    //             label: "backend-docs",
                    //             to: "https://mestochang.github.io/kingly_beauty_wiki_backend_doc/",
                    //         },
                    //         {
                    //             label: "frontend-docs",
                    //             to: "https://ben0588.github.io/kingly_beauty_wiki_frontend_doc/",
                    //         },
                    //     ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()}. 王道機器人股份有限公司`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            colorMode: {
                defaultMode: "dark", // 預設主題模式 (light or dark)
                disableSwitch: false, // 是否禁用切換按鈕
                respectPrefersColorScheme: true, // 根據瀏覽器設定自動切換主題
            },
        }),
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                language: ["en", "zh"],
            },
        ],
    ],
};

export default config;
