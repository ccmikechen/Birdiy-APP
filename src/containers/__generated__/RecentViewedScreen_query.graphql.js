/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RecentViewedProjectList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RecentViewedScreen_query$ref: FragmentReference;
export type RecentViewedScreen_query = {|
  +$fragmentRefs: RecentViewedProjectList_query$ref,
  +$refType: RecentViewedScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RecentViewedScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "RecentViewedProjectList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '22c593c17a6d402e2f9d1ec648c48dd5';
module.exports = node;
