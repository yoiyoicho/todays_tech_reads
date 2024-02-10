import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Head>
        <title>Today`&apos;`s Tech Reads - 今日読んだ技術記事</title>
        <meta property="og:title" content="Today's Tech Reads - 今日読んだ技術記事" />
        <meta property="og:description" content="今日読んだ技術記事をコメント付きで簡単登録。あとから日別に振り返ることができるアプリです。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://todays-tech-reads.vercel.app/" />
        <meta property="og:image" content="https://todays-tech-reads.vercel.app/ogp.png" />
        <meta property="og:site_name" content="Today's Tech Reads" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yoiyoicho" />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
