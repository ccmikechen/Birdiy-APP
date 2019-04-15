import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import TimelineScreen from '../screens/TimelineScreen';

const TimelineScreenFragmentContainer = createFragmentContainer(
  TimelineScreen,
  graphql`
    fragment TimelineScreen_query on RootQueryType {
      all: allPosts(
        first: $count,
        after: $all_cursor
      ) {
        ...AllPostList_posts
      }
      following: allPosts(
        first: $count,
        after: $following_cursor
      ) {
        ...FollowingPostList_posts
      }
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
          $all_cursor: String,
          $following_cursor: String
        ) {
          ...TimelineScreen_query
        }
      `,
      variables: {
        count: 4,
      },
    },
  ),
);
