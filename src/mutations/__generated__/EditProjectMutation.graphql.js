/**
 * @flow
 * @relayHash 9b25eae2f615eaaff9f7a113cfee756f
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
  +editProject: ?{|
    +project: {|
      +id: string
    |}
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
  editProject(input: $input) {
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
    "type": "EditProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
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
    "text": "mutation EditProjectMutation(\n  $input: EditProjectInput!\n) {\n  editProject(input: $input) {\n    project {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '01cc112c3dd9974d9f202da9e6273dc7';
module.exports = node;
