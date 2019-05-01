/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MyProjectList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyProjectsScreen_query$ref: FragmentReference;
export type MyProjectsScreen_query = {|
  +$fragmentRefs: MyProjectList_query$ref,
  +$refType: MyProjectsScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MyProjectsScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "MyProjectList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '33a9da486bbd233142e1f44c867e32db';
module.exports = node;
