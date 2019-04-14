import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import TimelineScreen from '../screens/TimelineScreen';

const TimelineScreenFragmentContainer = createFragmentContainer(
  TimelineScreen,
  graphql`
    fragment TimelineScreen_query on RootQueryType {
      all: posts {
        ...PostSection_post
      }
      following: posts {
        ...PostSection_post
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
        query TimelineScreenQuery {
          ...TimelineScreen_query
        }
      `,
    },
  ),
);
