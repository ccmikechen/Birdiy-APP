import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import FollowingUsersScreen from '../screens/FollowingUsersScreen';

const FollowingUsersScreenFragmentContainer = createFragmentContainer(
  FollowingUsersScreen,
  graphql`
    fragment FollowingUsersScreen_query on RootQueryType {
      ...FollowingUserList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    FollowingUsersScreenFragmentContainer,
    FollowingUsersScreen,
    {
      query: graphql`
        query FollowingUsersScreenQuery(
          $id: ID!,
          $count: Int!,
          $cursor: String,
        ) {
          ...FollowingUsersScreen_query
        }
      `,
      auth: true,
      variables: {
        count: 50,
        cursor: null,
      },
      queriesParams: props => ({
        id: props.navigation.getParam('id'),
      }),
    },
  ),
);
