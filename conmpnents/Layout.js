import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from  "../styles/utils.module.css"
import Link from "next/link";


const name= "Keigo Saito"
export const SiteTitle = "Next.js Blog"

function Layout({children,home}) {
    return (
        <div class={styles.container}>
            <Head>
                <link ref="icon" href="/favicon.iso"></link>

            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="/images/profile.png" 
                        className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}/>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ):(
                    <>
                        <img src="/images/profile.png" className={utilStyles.borderCircle}/>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                )}

            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">←ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;