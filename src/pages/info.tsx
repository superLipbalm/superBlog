import { graphql, Link } from 'gatsby';
import React, { ReactElement } from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

interface InfoPagePorps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
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
}: InfoPagePorps): ReactElement {
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
