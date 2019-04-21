import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class CreateProjectMutation extends Mutation {
  static mutation = graphql`
    mutation CreateProjectMutation($input: CreateProjectInput!) {
      createProject(input: $input) {
        project {
          name
          category {
            name
          }
        }
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
