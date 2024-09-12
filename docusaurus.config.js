// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "後臺管理系統說明文件",
    tagline:
        "文件紀錄後臺管理系統如何操作，依據不同帳號等級區分功能權限等說明事項。",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://your-docusaurus-site.example.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".

    i18n: {
        defaultLocale: "zh-Hant", // "en"
        locales: ["zh-Hant"],
        localeConfigs: {
            "zh-Hant": {
                label: "繁體中文",
                direction: "ltr",
                htmlLang: "zh-Hant",
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
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
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
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "後臺管理系統文件",
                logo: {
                    alt: "My Site Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "說明文件",
                    },
                    // { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/facebook/docusaurus",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "關於我們",
                        items: [
                            {
                                label: "後臺管理系統",
                                to: "/docs/intro",
                            },
                        ],
                    },

                    // {
                    //   title: "Community",
                    //   items: [
                    //     {
                    //       label: "Stack Overflow",
                    //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
                    //     },
                    //     {
                    //       label: "Discord",
                    //       href: "https://discordapp.com/invite/docusaurus",
                    //     },
                    //     {
                    //       label: "Twitter",
                    //       href: "https://twitter.com/docusaurus",
                    //     },
                    //   ],
                    // },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
};

export default config;
