import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import TimelineScreen from '../screens/TimelineScreen';

const TimelineScreenFragmentContainer = createFragmentContainer(
  TimelineScreen,
  graphql`
    fragment TimelineScreen_query on RootQueryType {
      ...AllActivityList_query
      ...FollowingActivityList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    TimelineScreenFragmentContainer,
    TimelineScreen,
    {
      query: graphql`
        query TimelineScreenQuery (
          $count: Int!,
          $allCursor: String,
          $followingCursor: String
        ) {
          ...TimelineScreen_query
        }
      `,
      auth: true,
      variables: {
        count: 5,
        allCursor: null,
        followingCursor: null,
      },
    },
  ),
);
