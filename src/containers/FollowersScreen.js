import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import FollowersScreen from '../screens/FollowersScreen';

const FollowersScreenFragmentContainer = createFragmentContainer(
  FollowersScreen,
  graphql`
    fragment FollowersScreen_query on RootQueryType {
      ...FollowerList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    FollowersScreenFragmentContainer,
    FollowersScreen,
    {
      query: graphql`
        query FollowersScreenQuery(
          $id: ID!,
          $count: Int!,
          $cursor: String,
        ) {
          ...FollowersScreen_query
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
