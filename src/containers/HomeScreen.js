import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import HomeScreen from '../screens/HomeScreen';

const HomeScreenFragmentContainer = createFragmentContainer(
  HomeScreen,
  graphql`
    fragment HomeScreen_query on RootQueryType {
      ...ProjectThumbnailsTable_query
      ...CategoriesTable_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    HomeScreenFragmentContainer,
    HomeScreen,
    {
      query: graphql`
        query HomeScreenQuery (
          $hotCategoryCount: Int!,
          $hotCategoryOrder: RankOrder,
          $newProjectCount: Int!,
          $projectsFilter: ProjectFilter,
        ) {
          ...HomeScreen_query
        }
      `,
      variables: {
        hotCategoryCount: 6,
        hotCategoryOrder: 'NAME',
        newProjectCount: 4,
        projectsFilter: {
          published: true,
        },
      },
    },
  ),
);
