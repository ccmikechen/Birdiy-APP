import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import UserPostsScreen from '../screens/UserPostsScreen';

const UserPostsScreenFragmentContainer = createFragmentContainer(
  UserPostsScreen,
  graphql`
    fragment UserPostsScreen_query on RootQueryType {
      ...UserPostList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    UserPostsScreenFragmentContainer,
    UserPostsScreen,
    {
      query: graphql`
        query UserPostsScreenQuery (
          $count: Int!,
          $cursor: String,
        ) {
          ...UserPostsScreen_query
        }
      `,
      variables: {
        count: 5,
        cursor: null,
      },
    },
  ),
);
