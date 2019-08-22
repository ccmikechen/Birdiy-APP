import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import ProjectDetailScreen from '../screens/ProjectDetailScreen';

const ProjectDetailScreenFragmentContainer = createFragmentContainer(
  ProjectDetailScreen,
  graphql`
    fragment ProjectDetailScreen_query on RootQueryType {
      project(id: $projectId) {
        id
        name
        image
        video
        ...ProjectAuthor_project
        topic {
          name
        }
        introduction
        source
        viewCount
        favoriteCount
        likeCount
        viewed
        liked
        favorite
        relatedPostCount
        ...ProjectDetailMaterialList_project
        ...ProjectDetailFileList_project
        ...ProjectDetailMethodList_project
        tip
        ...ProjectDetailFollowPostList_project
        ...ProjectDetailCommentList_project
        publishedAt
        deletedAt
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
          $cursor: String,
          $relatedPostsCount: Int!,
          $commentsCount: Int!,
          $repliesCount: Int!
        ) {
          ...ProjectDetailScreen_query
        }
      `,
      auth: true,
      variables: {
        relatedPostsCount: 5,
        commentsCount: 3,
        repliesCount: 1,
      },
      queriesParams: props => ({
        projectId: props.navigation.getParam('id'),
      }),
    },
  ),
);
