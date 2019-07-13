import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import EditProjectScreen from '../screens/EditProjectScreen';

const EditProjectScreenFragmentContainer = createFragmentContainer(
  EditProjectScreen,
  graphql`
    fragment EditProjectScreen_query on RootQueryType {
      project(
        id: $id,
      ) {
        id
        name
        published
        image
        source
        video
        topic {
          name
        }
        introduction
        tip
        materials {
          id
          name
          amountUnit
          url
        }
        fileResources {
          id
          name
          url
          type
        }
        methods {
          id
          image
          title
          content
        }
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    EditProjectScreenFragmentContainer,
    EditProjectScreen,
    {
      query: graphql`
        query EditProjectScreenQuery(
          $id: ID!,
        ) {
          ...EditProjectScreen_query
        }
      `,
      auth: true,
      queriesParams: props => ({
        id: props.navigation.getParam('id'),
      }),
    },
  ),
);
