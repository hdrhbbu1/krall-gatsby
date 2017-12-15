import React from "react"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <dl className="projectMetadata">
        <dt>Year</dt>
        <dd>{post.frontmatter.date}</dd>

        {(post.frontmatter.medium !== null)?<span><dt>Medium</dt><dd>{post.frontmatter.medium}</dd></span>:" "}

        {(post.frontmatter.dimensions !== null)?<span><dt>Dimensions</dt><dd>{post.frontmatter.dimensions}</dd></span>:" "}

        {(post.frontmatter.duration !== null)?<span><dt>Duration</dt><dd>{post.frontmatter.duration}</dd></span>: " "}

        {(post.frontmatter.venue_name !== null)?<span><dt>Venue</dt><dd>{post.frontmatter.venue_name}</dd></span>: " "}

        {(post.frontmatter.address_1 !== null)?<span><dt>Adress</dt><dd>{post.frontmatter.address_1}{(post.frontmatter.address_2 !== null)?<span><br/>{post.frontmatter.address_2}</span>: " "}</dd></span>: " "}

        {(post.frontmatter.venue_name !== null)?<span><dt>Website</dt><dd><a href={post.frontmatter.external_url}>{post.frontmatter.external_url}</a></dd></span>: " "}
      </dl>
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
        venue_name
        address_1
        address_2
        country
        curated_by
        artists_included
        external_url
      }
    }
  }
`
