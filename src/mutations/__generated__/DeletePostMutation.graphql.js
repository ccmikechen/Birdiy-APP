/**
 * @flow
 * @relayHash d9d1082974163f7916a052123536e765
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type DeletePostMutationVariables = {|
  input: IdInput
|};
export type DeletePostMutationResponse = {|
  +deletePost: ?{|
    +post: {|
      +id: string
    |}
  |}
|};
export type DeletePostMutation = {|
  variables: DeletePostMutationVariables,
  response: DeletePostMutationResponse,
|};
*/


/*
mutation DeletePostMutation(
  $input: IdInput!
) {
  deletePost(input: $input) {
    post {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "deletePost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "IdInput!"
      }
    ],
    "concreteType": "PostResult",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "post",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeletePostMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeletePostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeletePostMutation",
    "id": null,
    "text": "mutation DeletePostMutation(\n  $input: IdInput!\n) {\n  deletePost(input: $input) {\n    post {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c751360a27e9679a9c8a4457635ba8d1';
module.exports = node;
