/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProjectThumbnailsTable_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeScreen_query$ref: FragmentReference;
export type HomeScreen_query = {|
  +$fragmentRefs: ProjectThumbnailsTable_query$ref,
  +$refType: HomeScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HomeScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ProjectThumbnailsTable_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c6d35c3a2b7411ee1475ec597e6122f3';
module.exports = node;
