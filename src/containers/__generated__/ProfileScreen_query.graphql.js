/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProfileSection_profile$ref = any;
type ProfileTabMenu_profile$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProfileScreen_query$ref: FragmentReference;
export type ProfileScreen_query = {|
  +viewer: ?{|
    +$fragmentRefs: ProfileSection_profile$ref & ProfileTabMenu_profile$ref
  |},
  +$refType: ProfileScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProfileScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "viewer",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ProfileSection_profile",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ProfileTabMenu_profile",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f6f6ffe306c74e9f43e2883fcc6a9d58';
module.exports = node;
