import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import ProfileSettingScreen from '../screens/ProfileSettingScreen';

const ProfileSettingScreenFragmentContainer = createFragmentContainer(
  ProfileSettingScreen,
  graphql`
    fragment ProfileSettingScreen_query on RootQueryType {
      viewer {
        id
        name
        image
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    ProfileSettingScreenFragmentContainer,
    ProfileSettingScreen,
    {
      query: graphql`
        query ProfileSettingScreenQuery {
          ...ProfileSettingScreen_query
        }
      `,
      auth: true,
    },
  ),
);
