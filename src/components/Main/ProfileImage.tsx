import styled from '@emotion/styled';
import React from 'react';

const PROFILE_IMAGE_URL =
  'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80';

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
