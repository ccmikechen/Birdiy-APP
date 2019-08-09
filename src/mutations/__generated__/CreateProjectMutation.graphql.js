/**
 * @flow
 * @relayHash 2f58dc21dbe5ddcf9370f12010ce35bc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProjectInput = {|
  name: string,
  topicName: string,
|};
export type CreateProjectMutationVariables = {|
  input: CreateProjectInput
|};
export type CreateProjectMutationResponse = {|
  +createProject: ?{|
    +project: {|
      +id: string,
      +name: string,
      +image: ?string,
      +topic: {|
        +name: string
      |},
      +author: {|
        +name: string
      |},
      +published: ?boolean,
      +viewCount: number,
      +likeCount: ?number,
    |}
  |}
|};
export type CreateProjectMutation = {|
  variables: CreateProjectMutationVariables,
  response: CreateProjectMutationResponse,
|};
*/


/*
mutation CreateProjectMutation(
  $input: CreateProjectInput!
) {
  createProject(input: $input) {
    project {
      id
      name
      image
      topic {
        name
        id
      }
      author {
        name
        id
      }
      published
      viewCount
      likeCount
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateProjectInput!"
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
v5 = [
  (v3/*: any*/)
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "published",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewCount",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likeCount",
  "args": null,
  "storageKey": null
},
v9 = [
  (v3/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProject",
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
                "selections": (v5/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "author",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": (v5/*: any*/)
              },
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProject",
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
                "selections": (v9/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "author",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": (v9/*: any*/)
              },
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateProjectMutation",
    "id": null,
    "text": "mutation CreateProjectMutation(\n  $input: CreateProjectInput!\n) {\n  createProject(input: $input) {\n    project {\n      id\n      name\n      image\n      topic {\n        name\n        id\n      }\n      author {\n        name\n        id\n      }\n      published\n      viewCount\n      likeCount\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4fd29e6908e661a534b96f0950454cae';
module.exports = node;
