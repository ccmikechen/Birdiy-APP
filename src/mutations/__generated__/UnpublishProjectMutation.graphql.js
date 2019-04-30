/**
 * @flow
 * @relayHash cf38591a8ddbae9e8d7df46c2a68f174
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectInput = {|
  id: string
|};
export type UnpublishProjectMutationVariables = {|
  input: ProjectInput
|};
export type UnpublishProjectMutationResponse = {|
  +unpublishProject: ?{|
    +project: {|
      +id: string,
      +published: ?boolean,
    |}
  |}
|};
export type UnpublishProjectMutation = {|
  variables: UnpublishProjectMutationVariables,
  response: UnpublishProjectMutationResponse,
|};
*/


/*
mutation UnpublishProjectMutation(
  $input: ProjectInput!
) {
  unpublishProject(input: $input) {
    project {
      id
      published
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
    "name": "unpublishProject",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "published",
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
    "name": "UnpublishProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UnpublishProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UnpublishProjectMutation",
    "id": null,
    "text": "mutation UnpublishProjectMutation(\n  $input: ProjectInput!\n) {\n  unpublishProject(input: $input) {\n    project {\n      id\n      published\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f7fe5c66316fb8d4e694d2d0bbbce5e1';
module.exports = node;
