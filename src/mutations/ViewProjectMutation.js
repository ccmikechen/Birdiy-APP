import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import projectUpdater from '../updaters/projectUpdater';

export default class ViewProjectMutation extends Mutation {
  static mutation = graphql`
    mutation ViewProjectMutation($input: ProjectInput!) {
      viewProject(input: $input) {
        project {
          viewed
          viewCount
        }
      }
    }
  `;

  getMutationConfig() {
    return {
      optimisticUpdater: (store) => {
        const project = store.get(this.input.id);
        projectUpdater(project, {
          viewed: true,
          viewCount: project.getValue('viewCount') + 1,
        });
      },
    };
  }
}
