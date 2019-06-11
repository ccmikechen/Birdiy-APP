import { graphql, createRefetchContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import UserScreen from '../screens/UserScreen';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

const query = graphql`
  query UserScreenQuery(
    $id: ID!,
    $count: Int!
  ) {
    ...UserScreen_query
  }
`;

const UserScreenFragmentContainer = createRefetchContainer(
  UserScreen,
  graphql`
    fragment UserScreen_query on RootQueryType {
      user(id: $id) {
        ...ProfileSection_profile
        ...ProfileTabMenu_profile
        following
      }
    }
  `,
  query,
);

export default withNavigation(
  createQueryRenderer(
    UserScreenFragmentContainer,
    UserScreen,
    {
      query,
      auth: true,
      variables: {
        count: DEFAULT_PROJECT_BATCH_LOAD,
      },
      queriesParams: props => ({
        id: props.navigation.getParam('id'),
      }),
    },
  ),
);
