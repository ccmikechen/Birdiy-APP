import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import CreatePostScreen from '../screens/CreatePostScreen';

const CreatePostScreenFragmentContainer = createFragmentContainer(
  CreatePostScreen,
  graphql`
    fragment CreatePostScreen_query on RootQueryType {
      viewer {
        id
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    CreatePostScreenFragmentContainer,
    CreatePostScreen,
    {
      query: graphql`
        query CreatePostScreenQuery {
          ...CreatePostScreen_query
        }
      `,
      auth: true,
    },
  ),
);
