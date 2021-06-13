import Template from 'components/Common/Template';
import CommentWidget from 'components/Post/CommentWidget';
import PostContent from 'components/Post/PostContent';
import PostHead, { PostHeadProps } from 'components/Post/PostHead';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { ReactElement } from 'react';

interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: string;
            frontmatter: {
              title: string;
              summary: string;
              date: string;
              categories: string[];
              thumbnail: {
                childImageSharp: {
                  fluid: FluidObject;
                };
                publicURL: string;
              };
            };
          };
        },
      ];
    };
    location: {
      href: string;
    };
  };
}

function PostTemplate({
  data: {
    allMarkdownRemark: { edges },
    location: { href },
  },
}: PostTemplateProps): ReactElement {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { fluid },
          publicURL,
        },
      },
    },
  } = edges[0];

  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={fluid}
      />
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
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;
