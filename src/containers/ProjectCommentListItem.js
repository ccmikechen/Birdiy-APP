import { graphql, createFragmentContainer } from 'react-relay';

import ProjectCommentListItem from '../components/ProjectCommentListItem';

export default createFragmentContainer(
  ProjectCommentListItem,
  graphql`
    fragment ProjectCommentListItem_comment on ProjectComment {
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
