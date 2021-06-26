import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { ReactElement } from 'react';

interface PostItemProps {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  link: string;
}

function PostItem({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { fluid },
  },
  link,
}: PostItemProps): ReactElement {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage fluid={fluid} alt="Post Item Image" />
      <PostItemContent>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Date>{date}</Date>
      </PostItemContent>
    </PostItemWrapper>
  );
}

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  max-height: 200px;
  border-radius: 10px;
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

const ThumbnailImage = styled(Img)`
  width: 200px;
  height: 200px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 150px;
    height: 100%;
  }
`;

const PostItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 30px;
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 5px -5px;
  margin-top: auto;
`;

const CategoryItem = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 5px;
  background: #29323c;
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 5px;
  font-size: 16px;
  opacity: 0.8;

  @media (max-width: 768px) {
    -webkit-line-clamp: 1;
  }
`;

export default PostItem;
