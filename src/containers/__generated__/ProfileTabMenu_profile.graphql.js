/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserFavoritesScene_profile$ref = any;
type UserPostsScene_profile$ref = any;
type UserProjectsScene_profile$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProfileTabMenu_profile$ref: FragmentReference;
export type ProfileTabMenu_profile = {|
  +$fragmentRefs: UserProjectsScene_profile$ref & UserPostsScene_profile$ref & UserFavoritesScene_profile$ref,
  +$refType: ProfileTabMenu_profile$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProfileTabMenu_profile",
  "type": "Profile",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "UserProjectsScene_profile",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "UserPostsScene_profile",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "UserFavoritesScene_profile",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6b503638b5725a338a95586e403f00c1';
module.exports = node;
