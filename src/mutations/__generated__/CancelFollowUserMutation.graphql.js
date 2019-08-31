/**
 * @flow
 * @relayHash 98737f8288fe1aa22110a92b78c26514
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type CancelFollowUserMutationVariables = {|
  input: IdInput
|};
export type CancelFollowUserMutationResponse = {|
  +cancelFollowUser: ?{|
    +followingUser: {|
      +followingCount: ?number
    |},
    +followedUser: {|
      +following: boolean,
      +followerCount: ?number,
    |},
  |}
|};
export type CancelFollowUserMutation = {|
  variables: CancelFollowUserMutationVariables,
  response: CancelFollowUserMutationResponse,
|};
*/


/*
mutation CancelFollowUserMutation(
  $input: IdInput!
) {
  cancelFollowUser(input: $input) {
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
    "type": "IdInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "IdInput!"
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
    "name": "CancelFollowUserMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cancelFollowUser",
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
    "name": "CancelFollowUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cancelFollowUser",
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
    "name": "CancelFollowUserMutation",
    "id": null,
    "text": "mutation CancelFollowUserMutation(\n  $input: IdInput!\n) {\n  cancelFollowUser(input: $input) {\n    followingUser {\n      followingCount\n      id\n    }\n    followedUser {\n      following\n      followerCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a323b6631cd48cc80861343ac30e9a95';
module.exports = node;
