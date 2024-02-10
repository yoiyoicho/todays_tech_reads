export type PostType = {
  id: string;
  comment?: string;
  article: {
    id: string;
    url: string;
    title?: string;
    description?: string;
    ogImage?: any;
  };
  userId: string;
}
