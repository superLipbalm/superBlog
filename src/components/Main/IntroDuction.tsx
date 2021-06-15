import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import ProfileImage, {
  ProfileImageProps as IntroductionProps,
} from './ProfileImage';

function Introduction({ profileImage }: IntroductionProps): ReactElement {
  return (
    <Background>
      <IntroductionWrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <Title>Super Awesome Blog</Title>
          <SubTitle>superLipbalm의 개발블로그!</SubTitle>
        </div>
      </IntroductionWrapper>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`;

const IntroductionWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default Introduction;
