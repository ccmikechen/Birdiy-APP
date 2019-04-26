import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class CreateProjectMutation extends Mutation {
  static mutation = graphql`
    mutation CreateProjectMutation($input: CreateProjectInput!) {
      project: createProject(input: $input) {
        id
      }
    }
  `;

  static constraints = {
    name: {
      presence: true,
      length: { maximum: 20 },
    },
    category: {
      presence: true,
    },
  };
}
