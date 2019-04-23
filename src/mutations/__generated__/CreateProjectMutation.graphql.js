/**
 * @flow
 * @relayHash 108745eee7b894a88091acdff5b6941e
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
  +createProject: ?{|
    +project: ?{|
      +id: string
    |}
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
  createProject(input: $input) {
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
    "type": "CreateProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
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
    "text": "mutation CreateProjectMutation(\n  $input: CreateProjectInput!\n) {\n  createProject(input: $input) {\n    project {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'afbc69dd702c045bcd07b8a9db119f2a';
module.exports = node;
