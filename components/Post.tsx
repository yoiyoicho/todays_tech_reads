import { PostType } from '../types/PostType';

type PropsType = {
  post: PostType;
}

export default function Post({ post }: PropsType) {
  return(
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-start space-x-4">
        <img
          alt="Article thumbnail"
          className="w-24 h-24 object-cover rounded-md"
          height="100"
          src="/placeholder.svg"
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width="100"
        />
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#5590c9]">Article Title 1</h2>
          <p className="text-gray-700">
            {post.article.url}
          </p>
        </div>
      </div>
      {post.comment && (
        <div className="mt-4 p-2 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold text-[#5590c9]">Comments</h3>
          <p className="text-gray-700">{post.comment}</p>
        </div>
      )}
    </div>
  )
}
