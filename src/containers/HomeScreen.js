import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import HomeScreen from '../screens/HomeScreen';

const HomeScreenFragmentContainer = createFragmentContainer(
  HomeScreen,
  graphql`
    fragment HomeScreen_query on RootQueryType {
      ...ProjectThumbnailsTable_query
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
          $newProjectCount: Int!,
        ) {
          ...HomeScreen_query
        }
      `,
      variables: {
        newProjectCount: 4,
      },
    },
  ),
);
