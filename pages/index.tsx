/**
 * This original code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IxtYS3s8ikh
 */

import Header from '../components/Header';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link'

export default function Home() {
  const { user } = useUser();

  return (
    <div key="1" className="bg-[#5590c9] min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <Header />
      </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  今日読んだ技術記事を記録しよう
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  使い方はとてもシンプル。今日読んだ技術記事を記録するだけ。読んだその瞬間から、成長の一歩。
                </p>
              </div>
              {!user && (
                <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/api/auth/login?returnTo=/mypage"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="/ranking"
                >
                  Ranking
                </Link>
              </div>
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">How to Use</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  マイページ上部の投稿フォームから、今日読んだ技術記事をコメント付きで投稿しよう。
                </p>
              </div>
              <div>
                <img
                  alt="How to Use"
                  className="aspect-[3/2] rounded-lg object-cover border-2 border-gray-300"
                  height={400}
                  src="/how_to_use.png"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
