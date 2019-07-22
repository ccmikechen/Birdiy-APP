import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import MyPostsScreen from '../screens/MyPostsScreen';

const MyPostsScreenFragmentContainer = createFragmentContainer(
  MyPostsScreen,
  graphql`
    fragment MyPostsScreen_query on RootQueryType {
      viewer {
        id
      }
      ...MyPostList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    MyPostsScreenFragmentContainer,
    MyPostsScreen,
    {
      query: graphql`
        query MyPostsScreenQuery (
          $count: Int!,
          $cursor: String,
          $postId: ID,
        ) {
          ...MyPostsScreen_query
        }
      `,
      auth: true,
      variables: {
        count: 5,
        cursor: null,
      },
      queriesParams: props => ({
        postId: props.navigation.getParam('postId'),
      }),
    },
  ),
);
