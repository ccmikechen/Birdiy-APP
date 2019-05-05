import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';

export default class LoginMutation extends Mutation {
  static mutation = graphql`
    mutation LoginMutation($input: LoginInput!) {
      login(input: $input) {
        user {
          id
        }
        accessToken
        refreshToken
      }
    }
  `;

  constructor(input) {
    const parsedInput = {
      ...input,
      method: input.method.toUpperCase(),
    };

    super(parsedInput);
  }
}
