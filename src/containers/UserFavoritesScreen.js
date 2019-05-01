import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import UserFavoritesScreen from '../screens/UserFavoritesScreen';

const UserFavoritesScreenFragmentContainer = createFragmentContainer(
  UserFavoritesScreen,
  graphql`
    fragment UserFavoritesScreen_query on RootQueryType {
      ...UserFavoriteProjectList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    UserFavoritesScreenFragmentContainer,
    UserFavoritesScreen,
    {
      query: graphql`
        query UserFavoritesScreenQuery (
          $count: Int!,
          $cursor: String,
        ) {
          ...UserFavoritesScreen_query
        }
      `,
      variables: {
        count: 10,
        cursor: null,
      },
    },
  ),
);
