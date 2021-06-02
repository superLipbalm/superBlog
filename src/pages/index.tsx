import React from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import IntroDuction from 'components/Main/IntroDuction';
import Footer from 'components/Common/Footer';

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
      <Footer />
    </Container>
  );
}

export default IndexPage;
