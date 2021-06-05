import styled from '@emotion/styled';
import React from 'react';
import PostItem from './PostItem';

export type PostType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: string;
    };
  };
};

interface PostListProps {
  posts: PostType[];
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

function PostList({ posts }: PostListProps) {
  return (
    <PostListWrapper>
      {posts.map(
        ({
          node: {
            id,
            frontmatter: { thumbnail, ...rest },
          },
        }: PostType) => (
          <PostItem
            {...rest}
            thumbnail={thumbnail}
            link="https://www.google.com"
            key={id}
          />
        ),
      )}
    </PostListWrapper>
  );
}

export default PostList;
