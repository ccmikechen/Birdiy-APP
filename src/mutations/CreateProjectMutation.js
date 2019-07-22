import { graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

import Mutation from '../relay/Mutation';

export default class CreateProjectMutation extends Mutation {
  static mutation = graphql`
    mutation CreateProjectMutation($input: CreateProjectInput!) {
      createProject(input: $input) {
        project {
          id
          name
          image
          topic {
            name
          }
          author {
            name
          }
          published
          viewCount
          likeCount
        }
      }
    }
  `;

  constructor(input, profile) {
    super(input);
    this.profile = profile;
  }

  sharedUpdater(store, project) {
    const profileProxy = store.get(this.profile.id);

    const userProjectsSceneConnection = ConnectionHandler.getConnection(
      profileProxy,
      'UserProjectsScene_projects',
    );
    if (userProjectsSceneConnection) {
      const edge = ConnectionHandler.createEdge(
        store,
        userProjectsSceneConnection,
        project,
        'ProjectEdge',
      );
      ConnectionHandler.insertEdgeBefore(userProjectsSceneConnection, edge);
    }

    const myProjectListConnection = ConnectionHandler.getConnection(
      profileProxy,
      'MyProjectList_projects',
    );
    if (myProjectListConnection) {
      const edge = ConnectionHandler.createEdge(
        store,
        myProjectListConnection,
        project,
        'ProjectEdge',
      );
      ConnectionHandler.insertEdgeBefore(myProjectListConnection, edge);
    }
  }

  getMutationConfig() {
    return {
      updater: (store) => {
        const payload = store.getRootField('createProject');
        const project = payload.getLinkedRecord('project');
        this.sharedUpdater(store, project);
      },
    };
  }
}
