export default function PostSubmitForm() {
  return(
    <div className="mt-4 bg-white rounded-lg shadow-md p-4">
      <form className="flex flex-col space-y-2">
        <label className="text-lg font-semibold text-[#5590c9]" htmlFor="article-url-3">
          Share an article you read today:
        </label>
        <input className="p-2 border border-gray-200 border-gray-300 rounded-md dark:border-gray-800" placeholder="Enter article URL" type="url" />
        <textarea
          className="p-2 border border-gray-200 border-gray-300 rounded-md mt-2 dark:border-gray-800"
          id="comment"
          placeholder="Enter your comment"
        />
        <button className="p-2 bg-[#5590c9] text-white rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
