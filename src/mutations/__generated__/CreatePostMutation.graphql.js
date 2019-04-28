/**
 * @flow
 * @relayHash 8b96e895987af37d86c39b38471e8cc3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelatedProjectType = "CUSTOM" | "PROJECT" | "%future added value";
export type CreatePostInput = {|
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
export type CreatePostMutationVariables = {|
  input: CreatePostInput
|};
export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +post: {|
      +id: string
    |}
  |}
|};
export type CreatePostMutation = {|
  variables: CreatePostMutationVariables,
  response: CreatePostMutationResponse,
|};
*/


/*
mutation CreatePostMutation(
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    post {
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
    "type": "CreatePostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreatePostInput!"
      }
    ],
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
    "name": "CreatePostMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreatePostMutation",
    "id": null,
    "text": "mutation CreatePostMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    post {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1577452522141b565c8db88570dd3572';
module.exports = node;
