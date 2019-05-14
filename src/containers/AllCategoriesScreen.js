import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import AllCategoriesScreen from '../screens/AllCategoriesScreen';

const AllCategoriesScreenFragmentContainer = createFragmentContainer(
  AllCategoriesScreen,
  graphql`
    fragment AllCategoriesScreen_query on RootQueryType {
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
    AllCategoriesScreenFragmentContainer,
    AllCategoriesScreen,
    {
      query: graphql`
        query AllCategoriesScreenQuery {
          ...AllCategoriesScreen_query
        }
      `,
    },
  ),
);
