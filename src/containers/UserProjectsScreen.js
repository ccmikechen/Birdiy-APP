import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import UserProjectsScreen from '../screens/UserProjectsScreen';

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
        ) {
          ...UserProjectsScreen_query
        }
      `,
      variables: {
        count: 10,
        cursor: null,
      },
    },
  ),
);
