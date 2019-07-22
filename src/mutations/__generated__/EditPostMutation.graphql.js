/**
 * @flow
 * @relayHash 52a8e0ddfc92a10bef1aeaec2cbd92a8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelatedProjectType = "CUSTOM" | "PROJECT" | "%future added value";
export type EditPostInput = {|
  id: string,
  message: string,
  photos?: ?$ReadOnlyArray<?PostPhotoInput>,
  relatedProjectId?: ?string,
  relatedProjectName?: ?string,
  relatedProjectType: RelatedProjectType,
|};
export type PostPhotoInput = {|
  id?: ?string,
  image?: ?any,
  order: number,
|};
export type EditPostMutationVariables = {|
  input: EditPostInput
|};
export type EditPostMutationResponse = {|
  +editPost: ?{|
    +post: {|
      +id: string,
      +author: {|
        +id: string,
        +name: string,
        +image: ?string,
        +following: boolean,
      |},
      +insertedAt: ?any,
      +message: ?string,
      +photosCount: ?number,
      +thumbnail: ?{|
        +image: string
      |},
      +relatedProjectType: string,
      +relatedProjectName: ?string,
      +relatedProject: ?{|
        +id: string,
        +name: string,
      |},
    |}
  |}
|};
export type EditPostMutation = {|
  variables: EditPostMutationVariables,
  response: EditPostMutationResponse,
|};
*/


/*
mutation EditPostMutation(
  $input: EditPostInput!
) {
  editPost(input: $input) {
    post {
      id
      author {
        id
        name
        image
        following
      }
      insertedAt
      message
      photosCount
      thumbnail {
        image
        id
      }
      relatedProjectType
      relatedProjectName
      relatedProject {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditPostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "EditPostInput!"
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
  "kind": "LinkedField",
  "alias": null,
  "name": "author",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    (v4/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "following",
      "args": null,
      "storageKey": null
    }
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "insertedAt",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "message",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "photosCount",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relatedProjectType",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relatedProjectName",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "relatedProject",
  "storageKey": null,
  "args": null,
  "concreteType": "Project",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditPostMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editPost",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "PostResult",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "post",
            "storageKey": null,
            "args": null,
            "concreteType": "Post",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "thumbnail",
                "storageKey": null,
                "args": null,
                "concreteType": "PostPhoto",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
                ]
              },
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditPostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editPost",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "PostResult",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "post",
            "storageKey": null,
            "args": null,
            "concreteType": "Post",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "thumbnail",
                "storageKey": null,
                "args": null,
                "concreteType": "PostPhoto",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditPostMutation",
    "id": null,
    "text": "mutation EditPostMutation(\n  $input: EditPostInput!\n) {\n  editPost(input: $input) {\n    post {\n      id\n      author {\n        id\n        name\n        image\n        following\n      }\n      insertedAt\n      message\n      photosCount\n      thumbnail {\n        image\n        id\n      }\n      relatedProjectType\n      relatedProjectName\n      relatedProject {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9fed5fa0037e3e2bfa2d07da014ef300';
module.exports = node;
