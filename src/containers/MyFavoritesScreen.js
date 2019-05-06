import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import MyFavoritesScreen from '../screens/MyFavoritesScreen';

const MyFavoritesScreenFragmentContainer = createFragmentContainer(
  MyFavoritesScreen,
  graphql`
    fragment MyFavoritesScreen_query on RootQueryType {
      ...MyFavoriteProjectList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    MyFavoritesScreenFragmentContainer,
    MyFavoritesScreen,
    {
      query: graphql`
        query MyFavoritesScreenQuery (
          $count: Int!,
          $cursor: String,
        ) {
          ...MyFavoritesScreen_query
        }
      `,
      auth: true,
      variables: {
        count: 10,
        cursor: null,
      },
    },
  ),
);
