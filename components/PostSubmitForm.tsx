import React from 'react';
import { useForm } from 'react-hook-form';
import { PostFormType } from '../types/PostFormType';

export default function PostSubmitForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PostFormType>();

  const onSubmit = async (data: PostFormType) => {
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      reset();
    } catch (error) {
      console.error('Request failed:', error);
      alert('Failed to submit the post. Redirecting to the main page...');
    } finally {
      window.location.href = '/mypage';
    }
  };

  return(
    <div className="mt-4 bg-white rounded-lg shadow-md p-4">
      <form
        className="flex flex-col space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-lg font-semibold text-[#5590c9]" htmlFor="article-url-3">
          Share an article you read today:
        </label>
        <input
          className="p-2 border border-gray-200 border-gray-300 rounded-md dark:border-gray-800"
          placeholder="Enter article URL"
          id="url"
          type="url"
          {...register('url', { required: true })}
        />
        <textarea
          className="p-2 border border-gray-200 border-gray-300 rounded-md mt-2 dark:border-gray-800 dark:text-black"
          id="comment"
          placeholder="Enter your comment"
          {...register('comment')}
        />
        <button className="p-2 bg-[#5590c9] text-white rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
