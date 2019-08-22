/**
 * @flow
 * @relayHash a64d306cff29c439dc62a1158f43abed
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type CancelLikeProjectMutationVariables = {|
  input: IdInput
|};
export type CancelLikeProjectMutationResponse = {|
  +cancelLikeProject: ?{|
    +project: {|
      +liked: ?boolean,
      +likeCount: ?number,
    |}
  |}
|};
export type CancelLikeProjectMutation = {|
  variables: CancelLikeProjectMutationVariables,
  response: CancelLikeProjectMutationResponse,
|};
*/


/*
mutation CancelLikeProjectMutation(
  $input: IdInput!
) {
  cancelLikeProject(input: $input) {
    project {
      liked
      likeCount
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
  "name": "liked",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likeCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CancelLikeProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cancelLikeProject",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectResult",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "project",
            "storageKey": null,
            "args": null,
            "concreteType": "Project",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CancelLikeProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cancelLikeProject",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectResult",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "project",
            "storageKey": null,
            "args": null,
            "concreteType": "Project",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
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
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CancelLikeProjectMutation",
    "id": null,
    "text": "mutation CancelLikeProjectMutation(\n  $input: IdInput!\n) {\n  cancelLikeProject(input: $input) {\n    project {\n      liked\n      likeCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1a766111b339f4100c32d4479867703a';
module.exports = node;
