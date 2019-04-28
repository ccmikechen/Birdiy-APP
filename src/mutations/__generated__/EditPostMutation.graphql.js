/**
 * @flow
 * @relayHash 5ccc4b3fb6f14f4409639ada72c8ab46
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
      +id: string
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
    "kind": "LinkedField",
    "alias": null,
    "name": "editPost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "EditPostInput!"
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
    "name": "EditPostMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditPostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditPostMutation",
    "id": null,
    "text": "mutation EditPostMutation(\n  $input: EditPostInput!\n) {\n  editPost(input: $input) {\n    post {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cb4e08bc7a4edca03b308a9a934bcb52';
module.exports = node;
