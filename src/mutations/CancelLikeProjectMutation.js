import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import projectUpdater from '../updaters/projectUpdater';

export default class CancelLikeProjectMutation extends Mutation {
  static mutation = graphql`
    mutation CancelLikeProjectMutation($input: ProjectInput!) {
      cancelLikeProject(input: $input) {
        project {
          id
        }
      }
    }
  `;

  updateProject = (project) => {
    projectUpdater(project, {
      liked: false,
      likeCount: project.getValue('likeCount') - 1,
    });
  };

  getMutationConfig() {
    return {
      updater: (store) => {
        const payload = store.getRootField('cancelLikeProject');
        const project = payload.getLinkedRecord('project');
        this.updateProject(project);
      },
      optimisticUpdater: (store) => {
        const project = store.get(this.input.id);
        this.updateProject(project);
      },
    };
  }
}
