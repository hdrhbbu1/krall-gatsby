import React from "react"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>
        {post.frontmatter.title}
      </h1>
      <div className="projectMetadata">
      {post.frontmatter.date}, {post.frontmatter.medium}{(post.frontmatter.dimensions !== null)?<span>, {post.frontmatter.dimensions}</span> : " "}{(post.frontmatter.duration !== null)?<span>, {post.frontmatter.duration}</span> : " "}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        medium
        dimensions
        duration
        project_status
      }
    }
  }
`
