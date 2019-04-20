import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import PostDetailScreen from '../screens/PostDetailScreen';

const PostDetailScreenFragmentContainer = createFragmentContainer(
  PostDetailScreen,
  graphql`
    fragment PostDetailScreen_query on RootQueryType {
      post(id: $postId) {
        ...PostSection_post
        author {
          name
        }
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    PostDetailScreenFragmentContainer,
    PostDetailScreen,
    {
      query: graphql`
        query PostDetailScreenQuery (
          $postId: ID!,
        ) {
          ...PostDetailScreen_query
        }
      `,
      queriesParams: props => ({
        postId: props.navigation.getParam('id'),
      }),
    },
  ),
);
