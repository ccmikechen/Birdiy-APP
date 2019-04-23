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
        name
        image
        category {
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
        }
        methods {
          id
          image
          title
          content
        }
      }
      categories: allProjectCategories(
        first: 100000,
        order: NAME,
      ) {
        edges {
          node {
            id
            name
            image
          }
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
      queriesParams: props => ({
        id: props.navigation.getParam('id'),
      }),
    },
  ),
);
