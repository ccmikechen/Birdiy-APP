import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import EditPostScreen from '../screens/EditPostScreen';

const EditPostScreenFragmentContainer = createFragmentContainer(
  EditPostScreen,
  graphql`
    fragment EditPostScreen_query on RootQueryType {
      post(
        id: $id,
      ) {
        id
        message
        relatedProjectType
        relatedProjectName
        relatedProject {
          id
          name
          image
        }
        photos {
          id
          image
        }
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    EditPostScreenFragmentContainer,
    EditPostScreen,
    {
      query: graphql`
        query EditPostScreenQuery(
          $id: ID!,
        ) {
          ...EditPostScreen_query
        }
      `,
      auth: true,
      queriesParams: props => ({
        id: props.navigation.getParam('id'),
      }),
    },
  ),
);
