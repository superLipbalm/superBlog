import styled from '@emotion/styled';
import React, { createRef, ReactElement, useEffect } from 'react';

interface UtterancesAttributesType {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
}

function CommentWidget(): ReactElement {
  const wrapper = createRef<HTMLDivElement>();

  useEffect(() => {
    if (wrapper.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    wrapper.current.appendChild(utterances);
  }, []);

  return <UtterancesWrapper ref={wrapper} />;
}

const UtterancesWrapper = styled.div`
  padding: 0 20px;
`;

const src = 'https://utteranc.es/client.js';
const repo = 'superLipbalm/superBlog';

export default CommentWidget;
