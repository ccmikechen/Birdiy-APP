import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import ProjectDetailScreen from '../screens/ProjectDetailScreen';

const ProjectDetailScreenFragmentContainer = createFragmentContainer(
  ProjectDetailScreen,
  graphql`
    fragment ProjectDetailScreen_query on RootQueryType {
      project(id: $projectId) {
        name
        image
        ...ProjectAuthor_project
        category {
          name
        }
        introduction
        viewCount
        favoriteCount
        likeCount
        relatedPostCount
        ...ProjectDetailMaterialList_project
        ...ProjectDetailFileList_project
        ...ProjectDetailMethodList_project
        tip
        ...ProjectDetailFollowPostList_project
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    ProjectDetailScreenFragmentContainer,
    ProjectDetailScreen,
    {
      query: graphql`
        query ProjectDetailScreenQuery (
          $projectId: ID!,
          $relatedPostsCount: Int!,
          $relatedPostsCursor: String
        ) {
          ...ProjectDetailScreen_query
        }
      `,
      variables: {
        relatedPostsCount: 5,
      },
      queriesParams: props => ({
        projectId: props.navigation.getParam('id'),
      }),
    },
  ),
);
