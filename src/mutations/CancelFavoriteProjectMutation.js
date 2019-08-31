import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import projectUpdater from '../updaters/projectUpdater';

export default class CancelFavoriteProjectMutation extends Mutation {
  static mutation = graphql`
    mutation CancelFavoriteProjectMutation($input: IdInput!) {
      cancelFavoriteProject(input: $input) {
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
          favorite: false,
          favoriteCount: project.getValue('favoriteCount') - 1,
        });
      },
    };
  }
}
