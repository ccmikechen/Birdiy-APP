import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import projectUpdater from '../updaters/projectUpdater';

export default class LikeProjectMutation extends Mutation {
  static mutation = graphql`
    mutation LikeProjectMutation($input: ProjectInput!) {
      likeProject(input: $input) {
        project {
          id
        }
      }
    }
  `;

  updateProject = (project) => {
    projectUpdater(project, {
      liked: true,
      likeCount: project.getValue('likeCount') + 1,
    });
  };

  getMutationConfig() {
    return {
      updater: (store) => {
        const payload = store.getRootField('likeProject');
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
