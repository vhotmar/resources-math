import React from "react"
import Layout from "../components/layout"

const Lecture = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
);

export const pageQuery = graphql`
  query LectureMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt(pruneLength: 500)
      frontmatter {
        courseTitle
        courseId
      }
      fields {
        path
        slug
      }
    }
  }
`;

export default Lecture;
