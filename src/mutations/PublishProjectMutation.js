import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class PublishProjectMutation extends Mutation {
  static mutation = graphql`
    mutation PublishProjectMutation($input: ProjectInput!) {
      publishProject(input: $input) {
        project {
          id
        }
      }
    }
  `;
}
