import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import UserFavoritesScreen from '../screens/UserFavoritesScreen';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

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
          $id: ID!,
        ) {
          ...UserFavoritesScreen_query
        }
      `,
      variables: {
        count: DEFAULT_PROJECT_BATCH_LOAD,
        cursor: null,
      },
      queriesParams: props => ({
        id: props.navigation.getParam('id'),
      }),
    },
  ),
);
