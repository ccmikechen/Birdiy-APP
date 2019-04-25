/**
 * @flow
 * @relayHash 5c1e9af7b978f71acde8d7196e10b6b9
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
    +project: ?{|
      +name: string
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
      name
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "EditProjectInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editProject",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editProject",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
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
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditProjectMutation",
    "id": null,
    "text": "mutation EditProjectMutation(\n  $input: EditProjectInput!\n) {\n  editProject(input: $input) {\n    project {\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3c6fb1287a6a0317912055abbbbd60c1';
module.exports = node;
