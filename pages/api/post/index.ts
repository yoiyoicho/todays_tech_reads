import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';
import { findOrCreateArticle } from '../../../lib/article';

// POST /api/post
// Required fields in body: url
// Optional fields in body: comment

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const session = await getSession(req, res);
  const { url, comment } = req.body;

  if (!session) {
    return res.status(401).json({ error: "Unauthorized Error" });
  }

  if (!url) {
    return res.status(400).json({ error: "Bad Request: 'url' is required." });
  }

  try {
    const article = await findOrCreateArticle(url);
    if (!article) {
      throw new Error("Failed to find or create article.");
    }

    const post = await prisma.post.create({
      data: {
        comment: comment,
        articleId: article.id,
        userId: session.user.sub,
      },
    });
    if (!post) {
      throw new Error("Failed to create post.");
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Error in POST /api/post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
