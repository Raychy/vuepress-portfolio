import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const WorktPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/cal.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Crud App With Vue JS And PHP</h1>

        </div>
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/mobile.png')`, marginBottom: 0}}>
          <h1 className="post-title">Mobile App</h1>
          
        </div>
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/branding.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Branding</h1>
          
        </div>
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/website.jpeg')`, marginBottom: 0}}>
          <h1 className="post-title">Website Development</h1>
          
        </div>
      </div>
    </Layout>
  )
}
export default WorktPage
export const pageQuery = graphql`
  query WorkPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`