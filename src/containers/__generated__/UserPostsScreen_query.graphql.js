/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserPostList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserPostsScreen_query$ref: FragmentReference;
export type UserPostsScreen_query = {|
  +$fragmentRefs: UserPostList_query$ref,
  +$refType: UserPostsScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserPostsScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "UserPostList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9f854e29f1070a04c5b5872dfab5c5de';
module.exports = node;
