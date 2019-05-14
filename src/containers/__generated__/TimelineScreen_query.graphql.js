/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AllActivityList_query$ref = any;
type FollowingActivityList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimelineScreen_query$ref: FragmentReference;
export type TimelineScreen_query = {|
  +$fragmentRefs: AllActivityList_query$ref & FollowingActivityList_query$ref,
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
      "name": "AllActivityList_query",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FollowingActivityList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '159fc9cca17f8788af392dadb579a592';
module.exports = node;
