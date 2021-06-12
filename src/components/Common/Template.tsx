import styled from '@emotion/styled';
import React, { ReactElement, ReactNode } from 'react';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';

interface TemplateProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function Template({ children }: TemplateProps): ReactElement {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
}

export default Template;
