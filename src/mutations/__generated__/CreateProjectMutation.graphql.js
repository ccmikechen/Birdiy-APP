/**
 * @flow
 * @relayHash 00323f9a7089bee4b5c402edd18af516
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProjectInput = {|
  category: string,
  name: string,
|};
export type CreateProjectMutationVariables = {|
  input: CreateProjectInput
|};
export type CreateProjectMutationResponse = {|
  +project: ?{|
    +id: string
  |}
|};
export type CreateProjectMutation = {|
  variables: CreateProjectMutationVariables,
  response: CreateProjectMutationResponse,
|};
*/


/*
mutation CreateProjectMutation(
  $input: CreateProjectInput!
) {
  project: createProject(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "project",
    "name": "createProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateProjectInput!"
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
    "name": "CreateProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateProjectMutation",
    "id": null,
    "text": "mutation CreateProjectMutation(\n  $input: CreateProjectInput!\n) {\n  project: createProject(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6d575c7e4d0042463296dd79e311c70';
module.exports = node;
