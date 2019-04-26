/**
 * @flow
 * @relayHash 3562234733b2f512c3420fc256270671
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditProjectInput = {|
  category: string,
  fileResources?: ?$ReadOnlyArray<?ProjectFileResourceInput>,
  id: string,
  image?: ?any,
  introduction?: ?string,
  materials?: ?$ReadOnlyArray<?ProjectMaterialInput>,
  methods?: ?$ReadOnlyArray<?ProjectMethodInput>,
  name: string,
  publish?: ?boolean,
  tip?: ?string,
|};
export type ProjectFileResourceInput = {|
  file?: ?any,
  id?: ?string,
  name: string,
  order: number,
  url?: ?string,
|};
export type ProjectMaterialInput = {|
  amountUnit: string,
  id?: ?string,
  name: string,
  order: number,
  url?: ?string,
|};
export type ProjectMethodInput = {|
  content: string,
  id?: ?string,
  image?: ?any,
  order?: ?number,
  title?: ?string,
|};
export type EditProjectMutationVariables = {|
  input: EditProjectInput
|};
export type EditProjectMutationResponse = {|
  +project: ?{|
    +id: string
  |}
|};
export type EditProjectMutation = {|
  variables: EditProjectMutationVariables,
  response: EditProjectMutationResponse,
|};
*/


/*
mutation EditProjectMutation(
  $input: EditProjectInput!
) {
  project: editProject(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "project",
    "name": "editProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "EditProjectInput!"
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
    "name": "EditProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditProjectMutation",
    "id": null,
    "text": "mutation EditProjectMutation(\n  $input: EditProjectInput!\n) {\n  project: editProject(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '394b3546ebca1a7c05709111188fc278';
module.exports = node;
