/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const lecturePostTemplate = path.resolve(`src/templates/lectureTemplate.js`)

  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  });

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              parent {
                ... on File {
                  sourceInstanceName
                }
              }
            }
          }
        }
      }
    `,
  );

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }

  const lectures = allMarkdown.data.allMarkdownRemark.edges
    .filter(edge => edge.node.parent.sourceInstanceName === 'lectures');

  lectures.forEach(edge => {
    const { slug } = edge.node.fields;

    createPage({
      path: slug,
      component: lecturePostTemplate,
      context: {
        slug,
      },
    });
  });
}

const processMarkdown = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  const { permalink } = node.frontmatter;
  const { relativePath, sourceInstanceName } = getNode(node.parent);

  let slug = permalink;

  if (!slug) {
    if (sourceInstanceName === 'lectures') {
      const lectureRegex = /([a-z0-9]+)_([a-z0-9]+)_([a-z0-9]+)_([a-z0-9]+)_(.+).md$/i;

      const match = lectureRegex.exec(relativePath);
      const school = match[1];
      const year = match[2];
      const semester = match[3];
      const courseId = match[4];
      const name = match[5];

      slug = `/lecture/${school}/${year}/${semester}/${courseId}/${name}`;
    }
  }

  if (!slug) {
    // This will likely only happen for the partials in /content/home.
    slug = `/${relativePath.replace('.md', '')}`;
  }

  createNodeField({
    node,
    name: 'slug',
    value: slug,
  });

  createNodeField({
    node,
    name: 'path',
    value: path.join(sourceInstanceName, relativePath),
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  switch (node.internal.type) {
    case 'MarkdownRemark':
      processMarkdown({ node, getNode, actions });

      break;
  }
};
