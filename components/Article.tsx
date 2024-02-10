import { ArticleType } from '../types/ArticleType';
import Link from 'next/link'

type PropsType = {
  article: ArticleType;
}

export default function Article({ article }: PropsType) {
  return(
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link href={article.url} target="_blank">
        <div className="mb-4 p-2 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold text-[#5590c9]">★ {article.posts.length} Users</h3>
        </div>
        <div className="flex items-start space-x-4">
          <img
            alt="Article thumbnail"
            className="w-24 h-24 object-cover rounded-md"
            height="100"
            src={article.ogImage || "/placeholder.svg"}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#5590c9]">{article.title}</h2>
            <p className="text-gray-700">
              {article.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
