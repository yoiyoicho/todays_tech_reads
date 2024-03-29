import type { PrismaClient } from '@prisma/client';

export async function findOrCreateArticle(url: string, prisma: PrismaClient) {
  // TODO: urlがURL形式かどうかチェックする
  // TODO: urlからパラメータを除去する

  // urlに基づいてarticleレコードを検索
  let article = await prisma.article.findUnique({
    where: {
      url: url,
    }
  });

  // 該当するarticleがない場合、新しいレコードを作成
  if (!article) {
    article = await prisma.article.create({
      data: {
        url: url,
      },
    });
  }

  return article;
}
