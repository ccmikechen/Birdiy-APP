import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import userUpdater from '../updaters/userUpdater';

export default class FollowUserMutation extends Mutation {
  static mutation = graphql`
    mutation FollowUserMutation($input: UserInput!) {
      followUser(input: $input) {
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
          following: true,
          followerCount: user.getValue('followerCount') + 1,
        });
      },
    };
  }
}
