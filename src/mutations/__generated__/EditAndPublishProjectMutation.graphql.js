/**
 * @flow
 * @relayHash 11ddc8cfd0e3b9cab47e2ad34d9075a9
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
      +id: string,
      +name: string,
      +image: ?string,
      +topic: {|
        +name: string
      |},
      +published: ?boolean,
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
      name
      image
      topic {
        name
        id
      }
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "published",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditAndPublishProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editAndPublishProject",
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
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "topic",
                "storageKey": null,
                "args": null,
                "concreteType": "ProjectTopic",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ]
              },
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditAndPublishProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editAndPublishProject",
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
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "topic",
                "storageKey": null,
                "args": null,
                "concreteType": "ProjectTopic",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditAndPublishProjectMutation",
    "id": null,
    "text": "mutation EditAndPublishProjectMutation(\n  $input: EditProjectInput!\n) {\n  editAndPublishProject(input: $input) {\n    project {\n      id\n      name\n      image\n      topic {\n        name\n        id\n      }\n      published\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c7d2f588b897977402308c5bcfbe89a5';
module.exports = node;
