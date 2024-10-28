import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig, i18n } = useDocusaurusContext();
    const { currentLocale } = i18n;

    return (
        <header
            className={` ${clsx("hero hero--primary", styles.heroBanner)} `}
        >
            <div className="container h-full">
                <Heading as="h1" className="hero__title">
                    {currentLocale === "zh-Hans"
                        ? "后台管理系统教学"
                        : siteConfig.title}
                </Heading>
                <p className="hero__subtitle">
                    {currentLocale === "zh-Hans"
                        ? "此为后台管理系统架构规划文件，包含平台各项功能子系统说明及操作教学。"
                        : siteConfig.tagline}
                </p>

                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        {currentLocale === "zh-Hans"
                            ? "开始阅读文件"
                            : "開始閱讀文件"}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            // title={`${siteConfig.title}`}
            title="入口頁面"
            // description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main className="container">
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
