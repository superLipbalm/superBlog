import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostType } from 'components/Main/PostList';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { ReactElement } from 'react';

interface PostDatas {
  allMarkdownRemark: {
    edges: PostType[];
  };
}

interface SearchState {
  query: string;
  filteredPosts: PostType[];
}

const EMPTY_QUERY = '';

function Search(): ReactElement {
  const data: PostDatas = useStaticQuery(graphql`
    query queryPostDatas {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              summary
              date(formatString: "YYYY.MM.DD.")
              categories
              thumbnail {
                childImageSharp {
                  fluid(
                    maxWidth: 768
                    maxHeight: 200
                    fit: INSIDE
                    quality: 100
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const [state, setState] = useState<SearchState>({
    query: EMPTY_QUERY,
    filteredPosts: [],
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    const posts = data.allMarkdownRemark.edges || [];
    const filteredPosts = posts.filter(post => {
      const { title, summary, categories } = post.node.frontmatter;

      return (
        (title && title.toLowerCase().includes(query.toLowerCase())) ||
        (summary && title.toLowerCase().includes(query.toLowerCase())) ||
        (categories && categories.join(' ').toLowerCase().includes(query))
      );
    });

    setState({
      query,
      filteredPosts,
    });
  }

  function renderSearchResults() {
    const { query, filteredPosts } = state;
    const hasSearchResults = filteredPosts && query !== EMPTY_QUERY;
    const posts = hasSearchResults ? filteredPosts : [];

    return (
      posts &&
      posts.map(({ node }) => {
        const { slug } = node.fields;
        const { title, date, summary } = node.frontmatter;

        return (
          <Link to={slug} key={slug}>
            <header>
              <h2>{title}</h2>
            </header>
            <section>
              <p>{summary}</p>
            </section>
            <p>
              <em>{date}</em>
            </p>
          </Link>
        );
      })
    );
  }

  return (
    <div>
      <form>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          aria-label="Search"
          onChange={handleInputChange}
        />
      </form>
      {renderSearchResults()}
    </div>
  );
}

export default Search;
