import { graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

import Mutation from '../relay/Mutation';

export default class CreateProjectMutation extends Mutation {
  static mutation = graphql`
    mutation CreateProjectCommentMutation(
      $input: CreateProjectCommentInput!,
      $repliesCount: Int!,
      $repliesCursor: String,
    ) {
      createProjectComment(input: $input) {
        projectComment {
          id
          user {
            name
            image
          }
          parent {
            id
          }
          project {
            id
          }
          message
          insertedAt
          ...ProjectCommentReplyList_comment
        }
      }
    }
  `;

  tempID = 0;

  constructor(input) {
    super(input, { repliesCount: 0 });
  }

  sharedUpdater(store, projectComment) {
    const parentProxy = projectComment.getLinkedRecord('parent');

    if (parentProxy) {
      this.addReplyToComment(store, projectComment, parentProxy);
    } else {
      this.addCommentToProject(store, projectComment);
    }
  }

  addCommentToProject = (store, projectComment) => {
    const projectProxy = projectComment.getLinkedRecord('project');

    const commentListConnection = ConnectionHandler.getConnection(
      projectProxy,
      'ProjectDetailCommentList_comments',
    );
    if (commentListConnection) {
      const edge = ConnectionHandler.createEdge(
        store,
        commentListConnection,
        projectComment,
        'ProjectCommentEdge',
      );
      ConnectionHandler.insertEdgeBefore(commentListConnection, edge);
    }
  };

  addReplyToComment = (store, projectComment, parentProxy) => {
    const commentReplyListConnection = ConnectionHandler.getConnection(
      parentProxy,
      'ProjectCommentReplyList_replies',
    );
    if (commentReplyListConnection) {
      const edge = ConnectionHandler.createEdge(
        store,
        commentReplyListConnection,
        projectComment,
        'ProjectCommentEdge',
      );
      ConnectionHandler.insertEdgeBefore(commentReplyListConnection, edge);
    }
  };

  getMutationConfig() {
    this.tempId += 1;

    return {
      updater: (store) => {
        const payload = store.getRootField('createProjectComment');

        if (!payload) {
          return;
        }
        const projectComment = payload.getLinkedRecord('projectComment');
        this.sharedUpdater(store, projectComment);
      },
      optimisticResponse: {
        createProjectComment: {
          projectComment: {
            id: `client:newProjectComment:${this.tempId}`,
            user: null,
            parent: this.input.parentId ? {
              id: this.input.parentId,
            } : null,
            project: {
              id: this.input.projectId,
            },
            message: this.input.message,
            insertedAt: parseInt(Date.now() / 1000, 10).toString(),
            replies: {
              pageInfo: {
                hasNextPage: false,
                endCursor: '',
              },
              edges: [],
            },
          },
        },
      },
    };
  }
}
