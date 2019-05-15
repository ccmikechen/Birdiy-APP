import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import UserProjectsScreen from '../screens/UserProjectsScreen';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

const UserProjectsScreenFragmentContainer = createFragmentContainer(
  UserProjectsScreen,
  graphql`
    fragment UserProjectsScreen_query on RootQueryType {
      ...UserProjectList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    UserProjectsScreenFragmentContainer,
    UserProjectsScreen,
    {
      query: graphql`
        query UserProjectsScreenQuery (
          $count: Int!,
          $cursor: String,
          $id: ID!,
        ) {
          ...UserProjectsScreen_query
        }
      `,
      variables: {
        count: DEFAULT_PROJECT_BATCH_LOAD,
        cursor: null,
      },
      queriesParams: props => ({
        id: props.navigation.getParam('id'),
      }),
    },
  ),
);
