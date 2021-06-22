import styled from '@emotion/styled';
import React, { ReactElement, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import StyledScrollBar from './StyledScrollBar';

interface TemplateProps {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
}

function Template({
  title,
  description,
  url,
  image,
  children,
}: TemplateProps): ReactElement {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        {/* Meta Data for SNS */}
        {/* Open Graph Data */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        {/* For Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="_LXggtKnv6c32L-Wqf0Jpi2vcSYWyf7qgpXAmaVtMm8"
        />

        {/* Naver Search Advisor */}
        <meta
          name="naver-site-verification"
          content="911dca7d80d568846a63b6e6d0ca7fb661b8717a"
        />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      <StyledScrollBar>
        {children}
        <Footer />
      </StyledScrollBar>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default Template;
