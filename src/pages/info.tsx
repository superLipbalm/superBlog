import { graphql, Link } from 'gatsby';
import React, { FC, ReactElement } from 'react';
import Text from 'components/Text';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

interface InfoPagePorps {
  data: {
    site: {
      siteMetadata: {
        title: String;
        description: String;
        author: String;
      };
    };
  };
}

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-size: 20px;s
  }
`;

const Title = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Author = styled('div')(() => ({
  fontSize: '15px',
  color: 'blue',
}));

function InfoPage({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: InfoPagePorps) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={Title}>{title}</div>
      <Desc>{description}</Desc>
      <Author>{author}</Author>
      <Link to="/">To Home</Link>
    </div>
  );
}

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
