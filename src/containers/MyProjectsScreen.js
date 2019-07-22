import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import MyProjectsScreen from '../screens/MyProjectsScreen';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

const MyProjectsScreenFragmentContainer = createFragmentContainer(
  MyProjectsScreen,
  graphql`
    fragment MyProjectsScreen_query on RootQueryType {
      viewer {
        id
      }
      ...MyProjectList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    MyProjectsScreenFragmentContainer,
    MyProjectsScreen,
    {
      query: graphql`
        query MyProjectsScreenQuery (
          $count: Int!,
          $cursor: String,
        ) {
          ...MyProjectsScreen_query
        }
      `,
      auth: true,
      variables: {
        count: DEFAULT_PROJECT_BATCH_LOAD,
        cursor: null,
      },
    },
  ),
);
