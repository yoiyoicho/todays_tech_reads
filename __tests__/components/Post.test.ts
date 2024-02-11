import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Post from '../../components/Post';
import { PostType } from '../../types/PostType';

describe('Post Component', () => {
  const mockPost: PostType = {
    id: '1',
    userId: '1',
    createdAt: new Date().toISOString(),
    article: {
      id: '1',
      url: '/test-article',
      title: 'Test Article',
      description: 'This is a test article',
      ogImage: '/test-image.jpg',
    },
    comment: 'Test comment',
  };

  it('renders correctly', () => {
    // TODO: JSXが正しく認識されていない
    // render(<Post post={mockPost} />);

    // TODO: 記事のタイトル、説明、画像の表示を検証
    // TODO: コメントの表示を検証
  });

  it('renders a placeholder image when ogImage is not provided', () => {
    // ogImageが提供されていない場合
    const postWithoutImage = {
      ...mockPost,
      article: {
        ...mockPost.article,
        ogImage: undefined,
      },
    };
    // TODO: プレースホルダー画像が表示されることを検証
  });

  it('does not render the comments section when no comment is provided', () => {
    // TODO: コメントが提供されていない場合
    // TODO: コメントセクションが表示されないことを検証
  });
});
