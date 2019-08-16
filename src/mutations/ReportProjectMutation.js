import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class ReportProjectMutation extends Mutation {
  static mutation = graphql`
    mutation ReportProjectMutation($input: ProjectInput!) {
      reportProject(input: $input) {
        reported
      }
    }
  `;
}
