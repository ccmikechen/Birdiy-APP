/**
 * @flow
 * @relayHash f92bf8bf18f5054112dde5d34d540900
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostInput = {|
  id: string
|};
export type DeletePostMutationVariables = {|
  input: PostInput
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
  $input: PostInput!
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
    "type": "PostInput!",
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
        "type": "PostInput!"
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
    "text": "mutation DeletePostMutation(\n  $input: PostInput!\n) {\n  deletePost(input: $input) {\n    post {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ad98c1fe853cd4efc484920c05679e3';
module.exports = node;
