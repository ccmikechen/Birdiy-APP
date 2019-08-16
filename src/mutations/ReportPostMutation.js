import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class ReportPostMutation extends Mutation {
  static mutation = graphql`
    mutation ReportPostMutation($input: PostInput!) {
      reportPost(input: $input) {
        reported
      }
    }
  `;
}
