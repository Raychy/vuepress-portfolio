import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">Hi! I'm Adeyemi Racheal</div>
       
        <div className="primary-content" >I am currently a student of Federal Polytechnic Ilaro, Computer science Department. I am a Front end Developer, looking for opportunities</div>
        <Link to='/works' className="button -primary">Check My Works &rarr;</Link>
        {/* <Link to='/contact' className="button -primary">Get in touch &rarr;</Link> */}
      </div>
    )}
  />
)