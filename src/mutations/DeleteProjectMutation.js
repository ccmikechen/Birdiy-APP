import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class DeleteProjectMutation extends Mutation {
  static mutation = graphql`
    mutation DeleteProjectMutation($input: ProjectInput!) {
      project: deleteProject(input: $input) {
        id
      }
    }
  `;
}
