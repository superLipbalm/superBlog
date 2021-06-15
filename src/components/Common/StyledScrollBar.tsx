import styled from '@emotion/styled';
import React, { ReactChild, ReactElement } from 'react';

interface StyledScrollBarProps {
  children: ReactChild;
}

function StyledScrollBar({ children }: StyledScrollBarProps): ReactElement {
  return <ScrollBar>{children}</ScrollBar>;
}

const ScrollBar = styled.div`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    // border-radius: 5px;
  }
`;

export default StyledScrollBar;
