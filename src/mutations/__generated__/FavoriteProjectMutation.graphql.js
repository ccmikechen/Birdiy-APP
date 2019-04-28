/**
 * @flow
 * @relayHash c602732307e415f2226a1d007687c63e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectInput = {|
  id: string
|};
export type FavoriteProjectMutationVariables = {|
  input: ProjectInput
|};
export type FavoriteProjectMutationResponse = {|
  +favoriteProject: ?{|
    +project: {|
      +id: string
    |}
  |}
|};
export type FavoriteProjectMutation = {|
  variables: FavoriteProjectMutationVariables,
  response: FavoriteProjectMutationResponse,
|};
*/


/*
mutation FavoriteProjectMutation(
  $input: ProjectInput!
) {
  favoriteProject(input: $input) {
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
    "name": "favoriteProject",
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
    "name": "FavoriteProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "FavoriteProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "FavoriteProjectMutation",
    "id": null,
    "text": "mutation FavoriteProjectMutation(\n  $input: ProjectInput!\n) {\n  favoriteProject(input: $input) {\n    project {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8ef24c79e131b899cd72ca064b6775a';
module.exports = node;
