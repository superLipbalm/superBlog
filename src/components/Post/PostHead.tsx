import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';
import React, { ReactElement } from 'react';
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo';

interface GatsbyImgProps {
  fluid: FluidObject;
  alt: string;
  className?: string;
}

export interface PostHeadProps extends PostHeadInfoProps {
  thumbnail: FluidObject;
}

function PostHead({
  title,
  date,
  categories,
  thumbnail,
}: PostHeadProps): ReactElement {
  return (
    <PostHeadWrapper>
      <BackgroundImage fluid={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  );
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <Img {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 350px;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export default PostHead;
