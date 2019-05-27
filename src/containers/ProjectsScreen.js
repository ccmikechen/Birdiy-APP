import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import ProjectsScreen from '../screens/ProjectsScreen';

import { DEFAULT_PROJECT_BATCH_LOAD } from '../constants/defaults';

const ProjectsScreenFragmentContainer = createFragmentContainer(
  ProjectsScreen,
  graphql`
    fragment ProjectsScreen_query on RootQueryType {
      ...NewestProjectList_query
      ...HotestProjectList_query
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    ProjectsScreenFragmentContainer,
    ProjectsScreen,
    {
      query: graphql`
        query ProjectsScreenQuery (
          $count: Int!,
          $newestCursor: String,
          $hotestCursor: String,
          $filter: ProjectFilter,
        ) {
          ...ProjectsScreen_query
        }
      `,
      variables: {
        count: DEFAULT_PROJECT_BATCH_LOAD,
        newestCursor: null,
        hotestCursor: null,
      },
      queriesParams: props => ({
        filter: {
          name: props.navigation.getParam('keyword'),
          categories: props.navigation.getParam('categories'),
          topics: props.navigation.getParam('topics'),
        },
      }),
    },
  ),
);
