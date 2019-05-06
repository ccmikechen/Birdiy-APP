import { graphql, commitMutation } from 'react-relay';

import environment from '../relay/environment';

export default class RefreshSessionMutation {
  static auth = false;

  static mutation = graphql`
    mutation RefreshSessionMutation($input: RefreshSessionInput!) {
      refreshSession(input: $input) {
        accessToken
      }
    }
  `;

  constructor(refreshToken) {
    this.refreshToken = refreshToken;
  }

  commit = () => {
    const { mutation } = this.constructor;

    return new Promise((resolve, reject) => commitMutation(
      environment,
      {
        mutation,
        variables: {
          input: {
            refreshToken: this.refreshToken,
          },
        },
        onCompleted: (response, errors) => resolve({ response, errors }),
        onError: error => reject(error),
      },
    ));
  };
}
