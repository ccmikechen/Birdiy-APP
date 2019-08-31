import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import userUpdater from '../updaters/userUpdater';

export default class CancelFollowUserMutation extends Mutation {
  static mutation = graphql`
    mutation CancelFollowUserMutation($input: IdInput!) {
      cancelFollowUser(input: $input) {
        followingUser {
          followingCount
        }
        followedUser {
          following
          followerCount
        }
      }
    }
  `;

  getMutationConfig() {
    return {
      optimisticUpdater: (store) => {
        const user = store.get(this.input.id);
        userUpdater(user, {
          following: false,
          followerCount: user.getValue('followerCount') - 1,
        });
      },
    };
  }
}
