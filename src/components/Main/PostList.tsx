import styled from '@emotion/styled';
import React from 'react';
import PostItem from './PostItem';

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2021.01.01',
  categories: ['Web', 'Frontend'],
  summary:
    '이거슨 개츠비 블로그 포스트 아이템 컴포넌트를 위한 목업데이터! 잘나오나요?',
  thumbnail: 'src/images/profile',
  link: 'https://www.google.com',
};

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

function PostList() {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  );
}

export default PostList;
