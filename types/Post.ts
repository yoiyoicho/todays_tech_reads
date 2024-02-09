export type PostType = {
  id: string;
  comment: string | null;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  articleId: string;
}
