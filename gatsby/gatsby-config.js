// protect sanity token
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    description: `The Bestest Pizza in the Land`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the plugin name
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'lsjlt1b6',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
