import { graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

import Mutation from '../relay/Mutation';
import { ImageFile } from '../helpers/formFile';

const parsePhotos = photos => (
  photos.map((photo, index) => ({
    id: photo.id,
    ...(ImageFile.parseURI(photo.image, 'image')),
    order: index + 1,
  }))
);

export default class CreatePostMutation extends Mutation {
  static mutation = graphql`
    mutation CreatePostMutation($input: CreatePostInput!) {
      createPost(input: $input) {
        post {
          id
          author {
            id
            name
            image
            following
          }
          insertedAt
          message
          photosCount
          thumbnail {
            image
          }
          relatedProjectType
          relatedProjectName
          relatedProject {
            id
            name
          }
        }
      }
    }
  `;

  constructor(input, profile) {
    const {
      message,
      photos,
      relatedProject,
    } = input;

    const parsedInput = {
      message,
      photos: parsePhotos(photos),
      relatedProjectType: relatedProject.type.toUpperCase(),
      relatedProjectId: relatedProject.id,
      relatedProjectName: relatedProject.name,
    };

    super(parsedInput);
    this.profile = profile;
  }

  sharedUpdater(store, post) {
    const profileProxy = store.get(this.profile.id);

    const userPostsSceneConnection = ConnectionHandler.getConnection(
      profileProxy,
      'UserPostsScene_posts',
    );
    if (userPostsSceneConnection) {
      const edge = ConnectionHandler.createEdge(
        store,
        userPostsSceneConnection,
        post,
        'PostEdge',
      );
      ConnectionHandler.insertEdgeBefore(userPostsSceneConnection, edge);
    }

    const myPostListConnection = ConnectionHandler.getConnection(
      profileProxy,
      'MyPostList_posts',
    );
    if (myPostListConnection) {
      const edge = ConnectionHandler.createEdge(
        store,
        myPostListConnection,
        post,
        'PostEdge',
      );
      ConnectionHandler.insertEdgeBefore(myPostListConnection, edge);
    }
  }

  getMutationConfig() {
    return {
      updater: (store) => {
        const payload = store.getRootField('createPost');
        const post = payload.getLinkedRecord('post');
        this.sharedUpdater(store, post);
      },
    };
  }
}
