import styled from '@emotion/styled';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import { ReactElement } from 'react';

interface PostNavProps {
  prev?: string;
  next?: string;
}

function PostNav({ prev, next }: PostNavProps): ReactElement {
  const prevPostTitle = prev?.slice(1, prev.length - 1);
  const nextPostTitle = next?.slice(1, next.length - 1);

  return (
    <PostNavWrapper>
      {prev && (
        <NavItem to={prev}>
          <ButtonIcon>
            <FontAwesomeIcon icon={faArrowLeft} />
          </ButtonIcon>
          <PrevPostInfo>
            이전포스트<PostTitle>{prevPostTitle}</PostTitle>
          </PrevPostInfo>
        </NavItem>
      )}
      {next && (
        <NavItem to={next} style={{ marginLeft: 'auto' }}>
          <NextPostInfo>
            다음 포스트<PostTitle>{nextPostTitle}</PostTitle>
          </NextPostInfo>
          <ButtonIcon>
            <FontAwesomeIcon icon={faArrowRight} />
          </ButtonIcon>
        </NavItem>
      )}
    </PostNavWrapper>
  );
}

const PrevPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: auto;
`;

const NextPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: auto;
  margin-right: 15px;
`;

const PostTitle = styled.h3`
  max-width: 235px;
  color: #29323c;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const ButtonIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.15s ease;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  width: 320px;
  padding: 15px;
  border-radius: 5px;
  background-color: #f5f5f5;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #e5e5e5;
  }

  &:hover ${ButtonIcon} {
    transform: translateX(-5px);
  }

  &:hover ${NextPostInfo} + ${ButtonIcon} {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    width: 225px;
  }
`;

const PostNavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 768px;
  height: 200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default PostNav;
