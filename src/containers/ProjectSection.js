import { graphql, createFragmentContainer } from 'react-relay';

import ProjectSection from '../components/ProjectSection';

export default createFragmentContainer(
  ProjectSection,
  graphql`
    fragment ProjectSection_project on Project {
      id
      name
      image
      author {
        name
      }
      published
      viewCount
      likeCount
    }
  `,
);
