import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';


const SEO = () => {
    const site = useStaticQuery(graphql`
         {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    return (
        <Helmet
            title={site.siteMetadata.title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[{ name: 'description', content: site.siteMetadata.description }]}
            htmlAttributes={{ lang: 'en' }} />

    )
}

export default SEO;