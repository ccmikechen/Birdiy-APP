/**
 * @flow
 * @relayHash 2cbde934aecb735042ab16d5b34d9f6a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserInput = {|
  id: string
|};
export type FollowUserMutationVariables = {|
  input: UserInput
|};
export type FollowUserMutationResponse = {|
  +followUser: ?{|
    +followingUser: {|
      +followingCount: ?number
    |},
    +followedUser: {|
      +following: boolean,
      +followerCount: ?number,
    |},
  |}
|};
export type FollowUserMutation = {|
  variables: FollowUserMutationVariables,
  response: FollowUserMutationResponse,
|};
*/


/*
mutation FollowUserMutation(
  $input: UserInput!
) {
  followUser(input: $input) {
    followingUser {
      followingCount
      id
    }
    followedUser {
      following
      followerCount
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "UserInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "followingCount",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "following",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "followerCount",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FollowUserMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserResult",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "followingUser",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "followedUser",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FollowUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserResult",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "followingUser",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "followedUser",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "FollowUserMutation",
    "id": null,
    "text": "mutation FollowUserMutation(\n  $input: UserInput!\n) {\n  followUser(input: $input) {\n    followingUser {\n      followingCount\n      id\n    }\n    followedUser {\n      following\n      followerCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a00afb65ce020b62b22331fade249449';
module.exports = node;
