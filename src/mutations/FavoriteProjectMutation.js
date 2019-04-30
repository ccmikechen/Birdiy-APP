import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import projectUpdater from '../updaters/projectUpdater';

export default class FavoriteProjectMutation extends Mutation {
  static mutation = graphql`
    mutation FavoriteProjectMutation($input: ProjectInput!) {
      favoriteProject(input: $input) {
        project {
          favorite
          favoriteCount
        }
      }
    }
  `;

  getMutationConfig() {
    return {
      optimisticUpdater: (store) => {
        const project = store.get(this.input.id);
        projectUpdater(project, {
          favorite: true,
          favoriteCount: project.getValue('favoriteCount') + 1,
        });
      },
    };
  }
}
