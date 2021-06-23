import styled from '@emotion/styled';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

export interface PostHeadInfoProps {
  title: string;
  date: string;
  categories: string[];
}

function PostHeadInfo({
  title,
  date,
  categories,
}: PostHeadInfoProps): ReactElement {
  return (
    <PostHeadInfoWrapper>
      <GoHomeIcon to="/">
        <FontAwesomeIcon icon={faHome} />
      </GoHomeIcon>
      <Title>{title}</Title>
      <PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  );
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 350px;
  margin: 0 auto;
  padding: 60px 20px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 40px 20px;
  }
`;

const GoHomeIcon = styled(Link)`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #000000;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;

const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 45px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`;

export default PostHeadInfo;
