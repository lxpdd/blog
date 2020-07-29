/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"

import {rhythm} from "../utils/typography"

const Bio = () => {
    const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

    const {author, social} = data.site.siteMetadata
    return (
        <div
            style={{
                display: `flex`,
                marginBottom: rhythm(2.5),
                'box-shadow': 0
            }}
        >
            <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author.name}
                style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 0,
                    borderRadius: `100%`,
                }}
                imgStyle={{
                    borderRadius: `50%`,
                }}
            />
            <p>
                I'm {author.name}, {author.summary}
            </p>
            <a href="https://stackexchange.com/users/2072188/iiylll"><img
                src="https://stackexchange.com/users/flair/2072188.png" width="208" height="58"
                alt="profile for iiylll on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                title="profile for iiylll on Stack Exchange, a network of free, community-driven Q&amp;A sites"/></a>
        </div>
    )
}

export default Bio


