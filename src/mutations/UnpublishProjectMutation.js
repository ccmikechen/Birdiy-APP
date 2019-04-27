import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class UnpublishProjectMutation extends Mutation {
  static mutation = graphql`
    mutation UnpublishProjectMutation($input: ProjectInput!) {
      unpublishProject(input: $input) {
        project {
          id
        }
      }
    }
  `;
}
