import { graphql, createFragmentContainer } from 'react-relay';

import PostSection from '../components/PostSection';

export default createFragmentContainer(
  PostSection,
  graphql`
    fragment PostSection_post on Post {
      id
      author {
        id
        name
        image
        following
      }
      insertedAt
      message
      photosCount
      thumbnail {
        image
      }
      relatedProjectType
      relatedProjectName
      relatedProject {
        id
        name
      }
    }
  `,
);
