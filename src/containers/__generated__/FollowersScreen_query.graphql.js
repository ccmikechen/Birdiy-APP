/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FollowerList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FollowersScreen_query$ref: FragmentReference;
export type FollowersScreen_query = {|
  +$fragmentRefs: FollowerList_query$ref,
  +$refType: FollowersScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FollowersScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FollowerList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '62df43c69123b3c429be6647fb2e8cc6';
module.exports = node;
