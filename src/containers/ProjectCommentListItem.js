import { graphql, createRefetchContainer } from 'react-relay';

import ProjectCommentListItem from '../components/ProjectCommentListItem';

export default createRefetchContainer(
  ProjectCommentListItem,
  {
    comment: graphql`
      fragment ProjectCommentListItem_comment on ProjectComment {
        id
        user {
          name
          image
        }
        message
        insertedAt
        ...ProjectCommentReplyList_comment
      }
    `,
  },
  graphql`
    query ProjectCommentListItemQuery (
      $commentId: ID!,
      $repliesCount: Int!,
      $repliesCursor: String,
    ) {
      projectComment(id: $commentId) {
        ...ProjectCommentListItem_comment
      }
    }
  `,
);
