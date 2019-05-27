import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import SelectTopicScreen from '../screens/SelectTopicScreen';

const SelectTopicScreenFragmentContainer = createFragmentContainer(
  SelectTopicScreen,
  graphql`
    fragment SelectTopicScreen_query on RootQueryType {
      categories: allProjectCategories(
        first: 100000,
        order: NAME,
      ) {
        edges {
          node {
            id
            name
            image
            topics(
              first: 100000,
              order: NAME,
            ) {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    SelectTopicScreenFragmentContainer,
    SelectTopicScreen,
    {
      query: graphql`
        query SelectTopicScreenQuery {
          ...SelectTopicScreen_query
        }
      `,
    },
  ),
);
