/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserFavoriteProjectList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserFavoritesScreen_query$ref: FragmentReference;
export type UserFavoritesScreen_query = {|
  +$fragmentRefs: UserFavoriteProjectList_query$ref,
  +$refType: UserFavoritesScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserFavoritesScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "UserFavoriteProjectList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2acbcb7de66afeb7e29e7117918dcba4';
module.exports = node;
