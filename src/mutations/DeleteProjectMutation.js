import { graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

import Mutation from '../relay/Mutation';

export default class DeleteProjectMutation extends Mutation {
  static mutation = graphql`
    mutation DeleteProjectMutation($input: IdInput!) {
      deleteProject(input: $input) {
        project {
          id
        }
      }
    }
  `;

  constructor(input, profile) {
    super(input);
    this.profile = profile;
  }

  sharedUpdater(store, projectId) {
    const profileProxy = store.get(this.profile.id);

    const userProjectsSceneConnection = ConnectionHandler.getConnection(
      profileProxy,
      'UserProjectsScene_projects',
    );
    if (userProjectsSceneConnection) {
      ConnectionHandler.deleteNode(userProjectsSceneConnection, projectId);
    }

    const myProjectListConnection = ConnectionHandler.getConnection(
      profileProxy,
      'MyProjectList_projects',
    );
    if (myProjectListConnection) {
      ConnectionHandler.deleteNode(myProjectListConnection, projectId);
    }
  }

  getMutationConfig() {
    return {
      updater: (store) => {
        const payload = store.getRootField('deleteProject');
        const projectId = payload.getLinkedRecord('project').getValue('id');
        this.sharedUpdater(store, projectId);
      },
    };
  }
}
