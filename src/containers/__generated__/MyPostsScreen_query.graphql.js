/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MyPostList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyPostsScreen_query$ref: FragmentReference;
export type MyPostsScreen_query = {|
  +$fragmentRefs: MyPostList_query$ref,
  +$refType: MyPostsScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MyPostsScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "MyPostList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '79becf5aea5c5af542e4a9e1fe7703e8';
module.exports = node;
