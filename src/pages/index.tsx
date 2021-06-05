import React from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Introduction from 'components/Main/Introduction';
import Footer from 'components/Common/Footer';
import CategoryList from 'components/Main/CategoryList';
import PostList, { PostType } from 'components/Main/PostList';
import { graphql } from 'gatsby';

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
  };
}

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

function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={Category_List} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  );
}

export default IndexPage;

export const queryPostList = graphql`
  query queryPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail
          }
        }
      }
    }
  }
`;
