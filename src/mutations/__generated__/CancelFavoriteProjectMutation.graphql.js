/**
 * @flow
 * @relayHash 586bcaef98faab604dfee742452259e7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectInput = {|
  id: string
|};
export type CancelFavoriteProjectMutationVariables = {|
  input: ProjectInput
|};
export type CancelFavoriteProjectMutationResponse = {|
  +cancelFavoriteProject: ?{|
    +project: {|
      +id: string
    |}
  |}
|};
export type CancelFavoriteProjectMutation = {|
  variables: CancelFavoriteProjectMutationVariables,
  response: CancelFavoriteProjectMutationResponse,
|};
*/


/*
mutation CancelFavoriteProjectMutation(
  $input: ProjectInput!
) {
  cancelFavoriteProject(input: $input) {
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
    "name": "cancelFavoriteProject",
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
    "name": "CancelFavoriteProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CancelFavoriteProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CancelFavoriteProjectMutation",
    "id": null,
    "text": "mutation CancelFavoriteProjectMutation(\n  $input: ProjectInput!\n) {\n  cancelFavoriteProject(input: $input) {\n    project {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46b02977f6876157bc1db888c446ff6e';
module.exports = node;
