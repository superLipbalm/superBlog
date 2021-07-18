/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        images: path.resolve(__dirname, 'src/images'),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );

  // GraphQL Query Error Handle
  if (queryAllMarkdownData.errors) {
    reporter.panicOnbuild(`Error while running query`);
    return;
  }

  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/templates/post_template.tsx',
  );

  const posts = queryAllMarkdownData.data.allMarkdownRemark.edges;

  posts.forEach(
    (
      {
        node: {
          fields: { slug },
        },
      },
      index,
    ) => {
      const pageOptions = {
        path: slug,
        component: PostTemplateComponent,
        context: {
          slug,
          prev:
            index === posts.length - 1
              ? undefined
              : {
                  slug: posts[index + 1].node.fields.slug,
                  title: posts[index + 1].node.frontmatter.title,
                },

          next:
            index === 0
              ? undefined
              : {
                  slug: posts[index - 1].node.fields.slug,
                  title: posts[index - 1].node.frontmatter.title,
                },
        },
      };

      createPage(pageOptions);
    },
  );
};
