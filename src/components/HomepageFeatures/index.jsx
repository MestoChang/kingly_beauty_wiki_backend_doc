import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "後臺管理系統",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: (
            <>
                <a
                    className="button button--primary button--lg"
                    href="https://wiki.kinglyrobot.com/root"
                    target="_blank"
                    title="後臺管理系統"
                >
                    後臺管理系統入口
                </a>
            </>
        ),
    },
    {
        title: "美容百科",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: (
            <>
                <a
                    className="button button--primary button--lg"
                    href="https://beauty.kinglyrobot.com/"
                    target="_blank"
                    title="美容百科前端網站"
                >
                    美容百科前端網站
                </a>
            </>
        ),
    },
    {
        title: "運動百科",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                <a
                    className="button button--primary button--lg"
                    href="https://sport.kinglyrobot.com/"
                    target="_blank"
                    title="運動百科前端網站"
                >
                    運動百科前端網站
                </a>
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                {/* <Heading as="h3">{title}</Heading> */}
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
