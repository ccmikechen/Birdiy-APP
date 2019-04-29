import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class DeletePostMutation extends Mutation {
  static mutation = graphql`
    mutation DeletePostMutation($input: PostInput!) {
      deletePost(input: $input) {
        post {
          id
        }
      }
    }
  `;
}
