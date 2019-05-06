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
          $userId: ID!,
          $postId: ID,
        ) {
          ...UserPostsScreen_query
        }
      `,
      auth: true,
      variables: {
        count: 5,
        cursor: null,
      },
      queriesParams: props => ({
        userId: props.navigation.getParam('userId'),
        postId: props.navigation.getParam('postId'),
      }),
    },
  ),
);
