import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout, { SiteTitle } from '../conmpnents/Layout'
import utilStyls from "../styles/utils.module.css"
import { getPostsData } from '../lib/post'

//SSGの場合
export async function getStaticProps(){
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return{
    props:{
      allPostsData,
    },
  };
}



export default function Home({allPostsData}) {
  return <Layout home>
    <Head>
      <title>{SiteTitle}</title>
    </Head>
    <section className={utilStyls.headingMd}>私は普段データ分析を担当しています。</section>
    <section>
      <h2>📝エンジニアのブログ</h2>
    <div className={styles.grid}>
      {allPostsData.map(({id,title,date,thumbnail}) => (
        <article key={id}>
        <Link href={`/posts/${id}`}>
          <img src={`${thumbnail}`}
            className={styles.thumbnailImage}
          ></img>
        </Link>
        <Link href={`/posts/${id}`}>
          <a className={utilStyls.boldText}>{`${title}`}</a>
        </Link>
        <br />
        <small className={utilStyls.lightText}>{`${date}`}</small>
      </article>
      ))}
      
      
    </div>
    </section>

    </Layout> 
}
