/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserProjectList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserProjectsScreen_query$ref: FragmentReference;
export type UserProjectsScreen_query = {|
  +$fragmentRefs: UserProjectList_query$ref,
  +$refType: UserProjectsScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserProjectsScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "UserProjectList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fa630786900544254b44de52b0fe7785';
module.exports = node;
