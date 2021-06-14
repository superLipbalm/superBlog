import styled from '@emotion/styled';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

const FooterWrapper = styled.footer`
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

const GithubButton = styled(Link)`
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  font-size: 33px;
  color: #485563;
  cursor: pointer;

  &:hover {
    font-size: 35px;
    color: #000000;
  }
`;

function Footer(): ReactElement {
  return (
    <FooterWrapper>
      <GithubButton to="https://github.com/superLipbalm">
        <FontAwesomeIcon icon={faGithub} />
      </GithubButton>
      © 2021 SuperLipBalm, powered By Gatsby.
    </FooterWrapper>
  );
}

export default Footer;
