import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class EditProjectMutation extends Mutation {
  static mutation = graphql`
    mutation EditProjectMutation($input: EditProjectInput!) {
      editProject(input: $input) {
        project {
          name
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
