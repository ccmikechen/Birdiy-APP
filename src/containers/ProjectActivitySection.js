import { graphql, createFragmentContainer } from 'react-relay';

import ProjectActivitySection from '../components/ProjectActivitySection';

export default createFragmentContainer(
  ProjectActivitySection,
  graphql`
    fragment ProjectActivitySection_project on Project {
      id
      author {
        id
        name
        image
        following
      }
      image
      name
      category {
        name
      }
    }
  `,
);
