import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import projectUpdater from '../updaters/projectUpdater';

export default class FavoriteProjectMutation extends Mutation {
  static mutation = graphql`
    mutation FavoriteProjectMutation($input: ProjectInput!) {
      favoriteProject(input: $input) {
        project {
          id
        }
      }
    }
  `;

  updateProject = (project) => {
    projectUpdater(project, {
      favorite: true,
      favoriteCount: project.getValue('favoriteCount') + 1,
    });
  };

  getMutationConfig() {
    return {
      updater: (store) => {
        const payload = store.getRootField('favoriteProject');
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
