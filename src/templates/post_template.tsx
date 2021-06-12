import Template from 'components/Common/Template';
import { graphql } from 'gatsby';
import React, { ReactElement } from 'react';

interface PostTemplateProps {}

function PostTemplate(props: PostTemplateProps): ReactElement {
  console.log(props);

  return <Template>Post Template</Template>;
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
