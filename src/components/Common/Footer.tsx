import styled from '@emotion/styled';
import React from 'react';

const FooterWrapper = styled.div`
  display: grid;
  position: relative;
  bottom: 0;
  place-items: center;
  margin-top: auto;
  padding: 25px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      방문해 주셔서 감사합니다! 좋은 하루 보내세요!
      <br /> © 2021 SuperLipBalm, powered By Gatsby.
    </FooterWrapper>
  );
}

export default Footer;
