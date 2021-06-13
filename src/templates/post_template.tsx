import Template from 'components/Common/Template';
import CommentWidget from 'components/Post/CommentWidget';
import PostContent from 'components/Post/PostContent';
import PostHead, { PostHeadProps } from 'components/Post/PostHead';
import { graphql } from 'gatsby';
import React, { ReactElement } from 'react';

interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: string;
            frontmatter: PostHeadProps & { summary: string };
          };
        },
      ];
    };
  };
}

function PostTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
}: PostTemplateProps): ReactElement {
  const {
    node: { html, frontmatter },
  } = edges[0];

  return (
    <Template>
      <PostHead {...frontmatter} />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  );
}

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                fluid(fit: INSIDE, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
