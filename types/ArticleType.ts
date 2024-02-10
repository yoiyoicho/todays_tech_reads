export type ArticleType = {
  id: string;
  url: string;
  title?: string;
  description?: string;
  ogImage?: any;
  posts: {
    id: string;
  }[]
}
