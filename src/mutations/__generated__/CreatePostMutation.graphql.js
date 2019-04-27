/**
 * @flow
 * @relayHash 99e979c7da0f9cb63fe436c8e1b0107f
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
  image?: ?any,
  order: number,
|};
export type CreatePostMutationVariables = {|
  input: CreatePostInput
|};
export type CreatePostMutationResponse = {|
  +post: ?{|
    +id: string
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
  post: createPost(input: $input) {
    id
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
    "alias": "post",
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
    "text": "mutation CreatePostMutation(\n  $input: CreatePostInput!\n) {\n  post: createPost(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e893eb08936bfe008d525ebeedb274f6';
module.exports = node;
