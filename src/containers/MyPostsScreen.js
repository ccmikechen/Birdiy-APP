import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import MyPostsScreen from '../screens/MyPostsScreen';

const MyPostsScreenFragmentContainer = createFragmentContainer(
  MyPostsScreen,
  graphql`
    fragment MyPostsScreen_query on RootQueryType {
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
        ) {
          ...MyPostsScreen_query
        }
      `,
      variables: {
        count: 5,
        cursor: null,
      },
    },
  ),
);
