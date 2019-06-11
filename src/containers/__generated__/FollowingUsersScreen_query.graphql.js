/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FollowingUserList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FollowingUsersScreen_query$ref: FragmentReference;
export type FollowingUsersScreen_query = {|
  +$fragmentRefs: FollowingUserList_query$ref,
  +$refType: FollowingUsersScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FollowingUsersScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FollowingUserList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bb57016298eef47a93f6c42202631a8f';
module.exports = node;
