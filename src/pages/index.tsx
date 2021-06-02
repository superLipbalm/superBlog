import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import ProfileImage from 'components/Main/ProfileImage';
import IntroDuction from 'components/Main/IntroDuction';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function IndexPage() {
  return (
    <Container>
      <GlobalStyle />
      <IntroDuction />
      <Link to="/info">To Info</Link>
    </Container>
  );
}

export default IndexPage;
