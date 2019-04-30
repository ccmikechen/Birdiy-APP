import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import projectUpdater from '../updaters/projectUpdater';

export default class CancelLikeProjectMutation extends Mutation {
  static mutation = graphql`
    mutation CancelLikeProjectMutation($input: ProjectInput!) {
      cancelLikeProject(input: $input) {
        project {
          liked
          likeCount
        }
      }
    }
  `;

  getMutationConfig() {
    return {
      optimisticUpdater: (store) => {
        const project = store.get(this.input.id);
        projectUpdater(project, {
          liked: false,
          likeCount: project.getValue('likeCount') - 1,
        });
      },
    };
  }
}
