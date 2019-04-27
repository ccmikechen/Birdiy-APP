/**
 * @flow
 * @relayHash 0bc7ad26cb4937d97980c78a4d806eee
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
  +deleteProject: ?{|
    +project: {|
      +id: string
    |}
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
  deleteProject(input: $input) {
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
    "text": "mutation DeleteProjectMutation(\n  $input: ProjectInput!\n) {\n  deleteProject(input: $input) {\n    project {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bdd4b1572e3574c8b66aad0a73a13968';
module.exports = node;
