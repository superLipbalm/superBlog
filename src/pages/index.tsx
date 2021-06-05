import React from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import IntroDuction from 'components/Main/IntroDuction';
import Footer from 'components/Common/Footer';
import CategoryList from 'components/Main/CategoryList';
import PostList from 'components/Main/PostList';
import PostItem from 'components/Main/PostItem';

const Category_List = {
  All: 3,
  Web: 2,
  App: 1,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function IndexPage() {
  return (
    <Container>
      <GlobalStyle />
      <IntroDuction />
      <CategoryList selectedCategory="Web" categoryList={Category_List} />
      <PostList />
      <Footer />
    </Container>
  );
}

export default IndexPage;
