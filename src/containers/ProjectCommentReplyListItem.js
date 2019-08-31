import { graphql, createFragmentContainer } from 'react-relay';

import ProjectCommentReplyListItem from '../components/ProjectCommentReplyListItem';

export default createFragmentContainer(
  ProjectCommentReplyListItem,
  graphql`
    fragment ProjectCommentReplyListItem_comment on ProjectComment {
      id
      user {
        name
        image
      }
      message
      insertedAt
    }
  `,
);
