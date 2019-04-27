/**
 * @flow
 * @relayHash 7d3354968ca7ff28ddf133c1d86dcd27
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectInput = {|
  id: string
|};
export type CancelLikeProjectMutationVariables = {|
  input: ProjectInput
|};
export type CancelLikeProjectMutationResponse = {|
  +cancelLikeProject: ?{|
    +project: {|
      +id: string
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
  $input: ProjectInput!
) {
  cancelLikeProject(input: $input) {
    project {
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
    "type": "ProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "cancelLikeProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ProjectInput!"
      }
    ],
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
    "name": "CancelLikeProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CancelLikeProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CancelLikeProjectMutation",
    "id": null,
    "text": "mutation CancelLikeProjectMutation(\n  $input: ProjectInput!\n) {\n  cancelLikeProject(input: $input) {\n    project {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4341efec2a218393bec84030f347ab49';
module.exports = node;
