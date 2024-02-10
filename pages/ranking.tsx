import { GetServerSideProps } from 'next';
import Header from '../components/Header';
import Article from '../components/Article';
import prisma from '../lib/prisma';
import { ArticleType } from '../types/ArticleType';
import { fetchMetadata } from '@/lib/fetchMetadata';

type PropsType = {
  articles: ArticleType[];
}

export default function MyPage({ articles }: PropsType ) {
  const sortedArticles = [...articles].sort((a, b) => {
    return b.posts.length - a.posts.length
  })
  return (
    <div key="1" className="bg-[#5590c9] min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        <div className="grid gap-4">
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-[#000000]">
            <span>Ranking</span>
          </div>
          {sortedArticles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        url: true,
        posts: {
          select: {
            id: true,
          }
        }
      },
    });
    const articlesWithMetadata = await Promise.all(articles.map(async article => {
      const metadata = await fetchMetadata(article.url);
      return {
        ...article,
        ...metadata,
      };
    }));
    return {
      props: { articles: articlesWithMetadata },
    };
};
