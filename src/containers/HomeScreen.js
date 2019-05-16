import { graphql, createRefetchContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import HomeScreen from '../screens/HomeScreen';

const query = graphql`
  query HomeScreenQuery (
    $hotCategoryCount: Int!,
    $hotCategoryOrder: RankOrder,
    $newProjectCount: Int!,
  ) {
    ...HomeScreen_query
  }
`;

const HomeScreenFragmentContainer = createRefetchContainer(
  HomeScreen,
  graphql`
    fragment HomeScreen_query on RootQueryType {
      ...ProjectThumbnailsTable_query
      ...CategoriesTable_query
    }
  `,
  query,
);

export default withNavigation(
  createQueryRenderer(
    HomeScreenFragmentContainer,
    HomeScreen,
    {
      query,
      variables: {
        hotCategoryCount: 6,
        hotCategoryOrder: 'NAME',
        newProjectCount: 4,
      },
    },
  ),
);
