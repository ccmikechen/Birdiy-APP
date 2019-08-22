import { graphql, createFragmentContainer } from 'react-relay';

import ProjectCommentListItem from '../components/ProjectCommentListItem';

export default createFragmentContainer(
  ProjectCommentListItem,
  graphql`
    fragment ProjectCommentListItem_comment on ProjectComment {
      user {
        name
        image
      }
      message
      insertedAt
    }
  `,
);
