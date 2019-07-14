import { graphql, createRefetchContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import HomeScreen from '../screens/HomeScreen';

const query = graphql`
  query HomeScreenQuery (
    $hotCategoryCount: Int!,
    $hotCategoryOrder: RankOrder,
    $projectCount: Int!,
  ) {
    ...HomeScreen_query
  }
`;

const HomeScreenFragmentContainer = createRefetchContainer(
  HomeScreen,
  graphql`
    fragment HomeScreen_query on RootQueryType {
      ...CategoriesTable_query
      craftProjects: allProjects(
        first: $projectCount,
        filter: {categories: ["Craft"]},
      ) {
        ...ProjectThumbnailsTable_projects
      }
      electronicsProjects: allProjects(
        first: $projectCount,
        filter: {categories: ["Circuits"]},
      ) {
        ...ProjectThumbnailsTable_projects
      }
      livingProjects: allProjects(
        first: $projectCount,
        filter: {categories: ["Living"]},
      ) {
        ...ProjectThumbnailsTable_projects
      }
      outsideProjects: allProjects(
        first: $projectCount,
        filter: {categories: ["Outside"]},
      ) {
        ...ProjectThumbnailsTable_projects
      }
      scienceProjects: allProjects(
        first: $projectCount,
        filter: {categories: ["Science"]},
      ) {
        ...ProjectThumbnailsTable_projects
      }
      workshopProjects: allProjects(
        first: $projectCount,
        filter: {categories: ["Workshop"]},
      ) {
        ...ProjectThumbnailsTable_projects
      }
    }
  `,
  query,
);

export default withNavigation(
  createQueryRenderer(
    HomeScreenFragmentContainer,
    HomeScreen,
    {
      query,
      variables: {
        hotCategoryCount: 6,
        hotCategoryOrder: 'NAME',
        projectCount: 4,
      },
    },
  ),
);
