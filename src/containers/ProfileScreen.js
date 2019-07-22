import { graphql, createRefetchContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import ProfileScreen from '../screens/ProfileScreen';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

const query = graphql`
  query ProfileScreenQuery(
    $count: Int!
  ) {
    ...ProfileScreen_query
  }
`;

const ProfileScreenFragmentContainer = createRefetchContainer(
  ProfileScreen,
  graphql`
    fragment ProfileScreen_query on RootQueryType {
      viewer {
        id
        ...ProfileSection_profile
        ...ProfileTabMenu_profile
        user {
          id
        }
      }
    }
  `,
  query,
);

export default withNavigation(
  createQueryRenderer(
    ProfileScreenFragmentContainer,
    ProfileScreen,
    {
      query,
      auth: true,
      variables: {
        count: DEFAULT_PROJECT_BATCH_LOAD,
      },
    },
  ),
);
