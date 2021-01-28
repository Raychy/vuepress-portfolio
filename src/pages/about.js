import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"



const AboutPage = ({
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
                <div className="post-thumbnail" style={{ backgroundImage: `url('/assets/rach.jpg')`, marginBottom: 0 }}>

                    {/* <p>Let me help you kick start your next project &rarr;</p> */}
                </div>
                <div>
                    <h1 className="post-title">About Adeyemi Racheal</h1>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt 
                         pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                <p>Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt 
                         pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                         <i class='fa fa-user'></i>aaa
                </div>
            </div>
        </Layout>
    )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`