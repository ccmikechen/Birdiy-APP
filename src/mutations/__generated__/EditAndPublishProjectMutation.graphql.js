/**
 * @flow
 * @relayHash 0320179c4cda0d30734d242bc7c64bc9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditProjectInput = {|
  fileResources?: ?$ReadOnlyArray<?ProjectFileResourceInput>,
  id: string,
  image?: ?any,
  introduction?: ?string,
  materials?: ?$ReadOnlyArray<?ProjectMaterialInput>,
  methods?: ?$ReadOnlyArray<?ProjectMethodInput>,
  name: string,
  publish?: ?boolean,
  tip?: ?string,
  topic: string,
  video?: ?string,
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
export type EditAndPublishProjectMutationVariables = {|
  input: EditProjectInput
|};
export type EditAndPublishProjectMutationResponse = {|
  +editAndPublishProject: ?{|
    +project: {|
      +id: string
    |}
  |}
|};
export type EditAndPublishProjectMutation = {|
  variables: EditAndPublishProjectMutationVariables,
  response: EditAndPublishProjectMutationResponse,
|};
*/


/*
mutation EditAndPublishProjectMutation(
  $input: EditProjectInput!
) {
  editAndPublishProject(input: $input) {
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
    "name": "editAndPublishProject",
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
    "name": "EditAndPublishProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditAndPublishProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditAndPublishProjectMutation",
    "id": null,
    "text": "mutation EditAndPublishProjectMutation(\n  $input: EditProjectInput!\n) {\n  editAndPublishProject(input: $input) {\n    project {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c67490cce6758b040603625a2dba1445';
module.exports = node;
