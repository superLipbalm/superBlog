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
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const ThumbnailImage = styled(Img)`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`;

const PostItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px;
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  flex-wrap: wrap;
  margin: 10px -5px;
  margin-bottom: 5px;
`;

const CategoryItem = styled.div`
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
  margin-top: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`;

export default PostItem;
