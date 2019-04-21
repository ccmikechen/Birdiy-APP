/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CategoriesTable_query$ref = any;
type ProjectThumbnailsTable_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeScreen_query$ref: FragmentReference;
export type HomeScreen_query = {|
  +$fragmentRefs: ProjectThumbnailsTable_query$ref & CategoriesTable_query$ref,
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
    },
    {
      "kind": "FragmentSpread",
      "name": "CategoriesTable_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '11ddf2099eaf1e903511cd4ac7145963';
module.exports = node;
