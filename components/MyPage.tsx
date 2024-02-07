/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/YPdBb8ZvvCY
 */

import Header from './Header';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';
import Post from './Post';
import PostSubmitForm from './PostSubmitForm';

export default function MyPage() {
  return (
    <div key="1" className="bg-[#5590c9] min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        <div className="grid gap-4">
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-[#000000]">
            <ChevronLeftIcon className="h-4 w-4" />
            <span>2023/1/23 Tue.</span>
            <ChevronRightIcon className="h-4 w-4" />
          </div>
          <Post />
        </div>
        <PostSubmitForm />
      </div>
    </div>
  )
}
