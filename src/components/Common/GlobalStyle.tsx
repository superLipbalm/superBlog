import { css, Global } from '@emotion/react';
import React, { ReactElement } from 'react';

const defaultStyle = css`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

function GlobalStyle(): ReactElement {
  return <Global styles={defaultStyle} />;
}

export default GlobalStyle;
