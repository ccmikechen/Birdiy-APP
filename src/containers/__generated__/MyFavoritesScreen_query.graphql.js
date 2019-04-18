/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MyFavoriteProjectList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyFavoritesScreen_query$ref: FragmentReference;
export type MyFavoritesScreen_query = {|
  +$fragmentRefs: MyFavoriteProjectList_query$ref,
  +$refType: MyFavoritesScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MyFavoritesScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "MyFavoriteProjectList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6ede2fc652d1b54cc3ba868cfd2fe898';
module.exports = node;
