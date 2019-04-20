/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PostSection_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostDetailScreen_query$ref: FragmentReference;
export type PostDetailScreen_query = {|
  +post: ?{|
    +author: {|
      +name: string
    |},
    +$fragmentRefs: PostSection_post$ref,
  |},
  +$refType: PostDetailScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PostDetailScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "postId",
      "type": "ID!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "post",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "postId",
          "type": "ID!"
        }
      ],
      "concreteType": "Post",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "PostSection_post",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "author",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5b6f73e1f1311c513eaa7ecb8f1d4801';
module.exports = node;
