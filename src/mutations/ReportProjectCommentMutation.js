import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class ReportProjectCommentMutation extends Mutation {
  static mutation = graphql`
    mutation ReportProjectCommentMutation($input: IdInput!) {
      reportProjectComment(input: $input) {
        reported
      }
    }
  `;
}
