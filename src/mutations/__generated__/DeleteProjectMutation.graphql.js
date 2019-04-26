/**
 * @flow
 * @relayHash abfe648e410015623638edc5741d1fc5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectInput = {|
  id: string
|};
export type DeleteProjectMutationVariables = {|
  input: ProjectInput
|};
export type DeleteProjectMutationResponse = {|
  +project: ?{|
    +id: string
  |}
|};
export type DeleteProjectMutation = {|
  variables: DeleteProjectMutationVariables,
  response: DeleteProjectMutationResponse,
|};
*/


/*
mutation DeleteProjectMutation(
  $input: ProjectInput!
) {
  project: deleteProject(input: $input) {
    id
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
    "alias": "project",
    "name": "deleteProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ProjectInput!"
      }
    ],
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteProjectMutation",
    "id": null,
    "text": "mutation DeleteProjectMutation(\n  $input: ProjectInput!\n) {\n  project: deleteProject(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '139ae23e4e876ebe5f245838cfacaacd';
module.exports = node;
