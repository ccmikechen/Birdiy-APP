/**
 * @flow
 * @relayHash 95ff480aeed5a4139380bae345f6d704
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectInput = {|
  id: string
|};
export type PublishProjectMutationVariables = {|
  input: ProjectInput
|};
export type PublishProjectMutationResponse = {|
  +project: ?{|
    +id: string
  |}
|};
export type PublishProjectMutation = {|
  variables: PublishProjectMutationVariables,
  response: PublishProjectMutationResponse,
|};
*/


/*
mutation PublishProjectMutation(
  $input: ProjectInput!
) {
  project: publishProject(input: $input) {
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
    "name": "publishProject",
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
    "name": "PublishProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PublishProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "PublishProjectMutation",
    "id": null,
    "text": "mutation PublishProjectMutation(\n  $input: ProjectInput!\n) {\n  project: publishProject(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e72325460bd02592b29f711e1055bfdc';
module.exports = node;
