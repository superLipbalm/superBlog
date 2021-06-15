import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import GlobalStyle from '../components/Common/GlobalStyle';

function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <GlobalStyle />
      <Text>404</Text>
      <Description>
        찾을 수 없는 페이지입니다. <br />
      </Description>
      <GoToMainButton to="/">메인으로</GoToMainButton>
    </NotFoundPageWrapper>
  );
}

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.div`
  font-size: 150px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 100px;
  }
`;

const Description = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 20px;
  text-decoration: underline;
`;

export default NotFoundPage;
