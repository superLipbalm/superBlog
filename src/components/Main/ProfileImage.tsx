import styled from '@emotion/styled';
import React from 'react';

const PROFILE_IMAGE_URL = 'src/images/profile';

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

function ProfileImage() {
  return <ProfileImageWrapper src={PROFILE_IMAGE_URL} alt="Profile Image" />;
}

export default ProfileImage;
