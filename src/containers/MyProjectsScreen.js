import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import MyProjectsScreen from '../screens/MyProjectsScreen';

const MyProjectsScreenFragmentContainer = createFragmentContainer(
  MyProjectsScreen,
  graphql`
    fragment MyProjectsScreen_query on RootQueryType {
      ...MyProjectList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    MyProjectsScreenFragmentContainer,
    MyProjectsScreen,
    {
      query: graphql`
        query MyProjectsScreenQuery (
          $count: Int!,
          $cursor: String,
        ) {
          ...MyProjectsScreen_query
        }
      `,
      variables: {
        count: 10,
        cursor: null,
      },
    },
  ),
);
