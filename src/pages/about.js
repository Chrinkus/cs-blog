import React from 'react';

export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      This is my most recent attempt at launching a blog about the
      work that I do. Hopefully I follow through to a point where
      I'll have to change this page.
    </p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;