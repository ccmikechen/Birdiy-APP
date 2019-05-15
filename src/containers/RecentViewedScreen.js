import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import RecentViewedScreen from '../screens/RecentViewedScreen';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

const RecentViewedScreenFragmentContainer = createFragmentContainer(
  RecentViewedScreen,
  graphql`
    fragment RecentViewedScreen_query on RootQueryType {
      ...RecentViewedProjectList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    RecentViewedScreenFragmentContainer,
    RecentViewedScreen,
    {
      query: graphql`
        query RecentViewedScreenQuery (
          $count: Int!,
          $cursor: String,
        ) {
          ...RecentViewedScreen_query
        }
      `,
      auth: true,
      variables: {
        count: DEFAULT_PROJECT_BATCH_LOAD,
        cursor: null,
      },
    },
  ),
);
