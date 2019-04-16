/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AllPostList_query$ref = any;
type FollowingPostList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimelineScreen_query$ref: FragmentReference;
export type TimelineScreen_query = {|
  +$fragmentRefs: AllPostList_query$ref & FollowingPostList_query$ref,
  +$refType: TimelineScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TimelineScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "AllPostList_query",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FollowingPostList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f986f95ec5b770f3607a76da1f27494d';
module.exports = node;
