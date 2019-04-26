/**
 * @flow
 * @relayHash f9be5f2c9ed9547c32d32634f2fa455f
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
  +project: ?{|
    +id: string
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
  project: unpublishProject(input: $input) {
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
    "text": "mutation UnpublishProjectMutation(\n  $input: ProjectInput!\n) {\n  project: unpublishProject(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '05222cb3e789779bafecfdb845d6dd7f';
module.exports = node;
