import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import projectUpdater from '../updaters/projectUpdater';

export default class LikeProjectMutation extends Mutation {
  static mutation = graphql`
    mutation LikeProjectMutation($input: ProjectInput!) {
      likeProject(input: $input) {
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
          liked: true,
          likeCount: project.getValue('likeCount') + 1,
        });
      },
    };
  }
}