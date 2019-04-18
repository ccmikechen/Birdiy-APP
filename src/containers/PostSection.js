import { graphql, createFragmentContainer } from 'react-relay';

import PostSection from '../components/PostSection';

export default createFragmentContainer(
  PostSection,
  graphql`
    fragment PostSection_post on Post {
      author {
        name
        image
      }
      insertedAt
      message
        thumbnail {
        image
      }
      relatedProjectType
      relatedProjectName
      relatedProject {
        name
      }
    }
  `,
);