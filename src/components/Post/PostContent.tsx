import styled from '@emotion/styled';
import React, { ReactElement } from 'react';

interface PostContentProps {
  html: string;
}

function PostContent({ html }: PostContentProps): ReactElement {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
}

const MarkdownRenderer = styled.div`
  // Renderer
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 25px 15px;
  word-break: break-all;

  // Markdown
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;

  // Paragraph
  p {
    padding: 3px 0;
  }

  // Heading
  h1,
  h2,
  h3,
  h4 {
    font-weight: 800;
    margin-bottom: 10px;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4 {
    margin-top: 10px;
  }

  hr + h1,
  hr + h2,
  hr + h3,
  hr + h4 {
    margin-top: 0px;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  // Quotation
  blockquote {
    margin: 10px 0;
    padding: 5px 15px;
    background: #f5f5f5;
    border-left: 4px solid #485563;
    font-weight: 600;
  }

  // List
  ol,
  ul {
    margin-left: 20px;
    padding: 10px 0;
  }

  // Table
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th,
  td {
    padding: 3px;
    border: 1px solid #000000;
  }

  // Horizontal Rule
  hr {
    margin-bottom: 5px;
  }

  // Anchor
  a {
    color: #0984e3;
  }

  // Code
  pre[class*='language-'] {
    margin: 10px 0;
    padding: 15px;
    border-radius: 5px;
    font-size: 15px;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // Responsive
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    line-height: 1.6;

    h1 {
      font-size: 25px;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 19px;
    }

    h4 {
      font-size: 16px;
    }

    img {
      width: 100%;
    }
  }
`;

export default PostContent;
