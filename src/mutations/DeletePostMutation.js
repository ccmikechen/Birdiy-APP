import { graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

import Mutation from '../relay/Mutation';

export default class DeletePostMutation extends Mutation {
  static mutation = graphql`
    mutation DeletePostMutation($input: IdInput!) {
      deletePost(input: $input) {
        post {
          id
        }
      }
    }
  `;

  constructor(input, profile) {
    super(input);
    this.profile = profile;
  }

  sharedUpdater(store, postId) {
    const profileProxy = store.get(this.profile.id);

    const userPostsSceneConnection = ConnectionHandler.getConnection(
      profileProxy,
      'UserPostsScene_posts',
    );
    if (userPostsSceneConnection) {
      ConnectionHandler.deleteNode(userPostsSceneConnection, postId);
    }

    const myPostListConnection = ConnectionHandler.getConnection(
      profileProxy,
      'MyPostList_posts',
    );
    if (myPostListConnection) {
      ConnectionHandler.deleteNode(myPostListConnection, postId);
    }
  }

  getMutationConfig() {
    return {
      updater: (store) => {
        const payload = store.getRootField('deletePost');
        const postId = payload.getLinkedRecord('post').getValue('id');
        this.sharedUpdater(store, postId);
      },
    };
  }
}
