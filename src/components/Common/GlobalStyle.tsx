import { css, Global } from '@emotion/react';
import React from 'react';

const defaultStyle = css`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Cute+Font&display=swap');

    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Cute Font', cursive;
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

function GlobalStyle() {
  return <Global styles={defaultStyle} />;
}

export default GlobalStyle;
