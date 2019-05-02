import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import PostImagesScreen from '../screens/PostImagesScreen';

const PostImagesScreenFragmentContainer = createFragmentContainer(
  PostImagesScreen,
  graphql`
    fragment PostImagesScreen_query on RootQueryType {
      post(id: $id) {
        ...PostImageSlider_post
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    PostImagesScreenFragmentContainer,
    PostImagesScreen,
    {
      query: graphql`
        query PostImagesScreenQuery (
          $id: ID!,
        ) {
          ...PostImagesScreen_query
        }
      `,
      queriesParams: props => ({
        id: props.navigation.getParam('id'),
      }),
    },
  ),
);
