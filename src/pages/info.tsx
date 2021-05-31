import { graphql } from 'gatsby';
import React, { FC, ReactElement } from 'react';
import Text from 'components/Text';

interface InfoPagePorps {
  data: {
    site: {
      siteMetadata: {
        title: String;
        description: String;
        author: String;
      };
    };
  };
}

function InfoPage({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: InfoPagePorps) {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
    </div>
  );
}

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
