import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import CreateProjectScreen from '../screens/CreateProjectScreen';

const CreateProjectScreenFragmentContainer = createFragmentContainer(
  CreateProjectScreen,
  graphql`
    fragment CreateProjectScreen_query on RootQueryType {
      categories: allProjectCategories(
        first: 100000,
        order: NAME,
      ) {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    CreateProjectScreenFragmentContainer,
    CreateProjectScreen,
    {
      query: graphql`
        query CreateProjectScreenQuery {
          ...CreateProjectScreen_query
        }
      `,
    },
  ),
);
