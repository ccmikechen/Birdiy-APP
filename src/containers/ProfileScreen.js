import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import ProfileScreen from '../screens/ProfileScreen';

const ProfileScreenFragmentContainer = createFragmentContainer(
  ProfileScreen,
  graphql`
    fragment ProfileScreen_query on RootQueryType {
      viewer {
        ...ProfileSection_profile
        ...ProfileTabMenu_profile
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    ProfileScreenFragmentContainer,
    ProfileScreen,
    {
      query: graphql`
        query ProfileScreenQuery(
          $count: Int!
        ) {
          ...ProfileScreen_query
        }
      `,
      variables: {
        count: 10,
      },
    },
  ),
);
