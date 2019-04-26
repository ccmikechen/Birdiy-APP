import { graphql, createRefetchContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import ProfileScreen from '../screens/ProfileScreen';

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
        ...ProfileSection_profile
        ...ProfileTabMenu_profile
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
      variables: {
        count: 10,
      },
    },
  ),
);
