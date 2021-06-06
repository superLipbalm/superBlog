import styled from '@emotion/styled';
import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

export interface ProfileImageProps {
  profileImage: FluidObject;
}

const ProfileImageWrapper = styled(Img)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

function ProfileImage({ profileImage }: ProfileImageProps) {
  return <ProfileImageWrapper fluid={profileImage} alt="Profile Image" />;
}

export default ProfileImage;
