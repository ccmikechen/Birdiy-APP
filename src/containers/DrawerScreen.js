import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import DrawerScreen from '../screens/DrawerScreen';

const DrawerScreenFragmentContainer = createFragmentContainer(
  DrawerScreen,
  graphql`
    fragment DrawerScreen_query on RootQueryType {
      viewer {
        name
        image
        followingCount
        followerCount
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    DrawerScreenFragmentContainer,
    DrawerScreen,
    {
      query: graphql`
        query DrawerScreenQuery {
          ...DrawerScreen_query
        }
      `,
    },
  ),
);
