import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import ProjectsScreen from '../screens/ProjectsScreen';

const ProjectsScreenFragmentContainer = createFragmentContainer(
  ProjectsScreen,
  graphql`
    fragment ProjectsScreen_query on RootQueryType {
      ...NewestProjectList_query
      ...HotestProjectList_query
      categories: allProjectCategories(
        first: 100000,
        order: NAME,
      ) {
        edges {
          node {
            id
            name
            image
          }
        }
      }
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
        ) {
          ...ProjectsScreen_query
        }
      `,
      variables: {
        count: 10,
        newestCursor: null,
        hotestCursor: null,
      },
    },
  ),
);
