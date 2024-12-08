import Head from "next/head";
import Link from "next/link";


export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>最初の投稿</title>
            <h1>最初のポスト</h1>
            <Link href="/">ホームに戻る</Link>
            </Head>

        </div>
    );
}