/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PostImageSlider_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostImagesScreen_query$ref: FragmentReference;
export type PostImagesScreen_query = {|
  +post: ?{|
    +$fragmentRefs: PostImageSlider_post$ref
  |},
  +$refType: PostImagesScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PostImagesScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id",
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
          "variableName": "id",
          "type": "ID!"
        }
      ],
      "concreteType": "Post",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "PostImageSlider_post",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '86f60968f430eb61388ce5a001836562';
module.exports = node;
