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
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: ProfileSection_profile$ref & ProfileTabMenu_profile$ref,
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
      "concreteType": "Viewer",
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
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "user",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd3bfb4ec7adbe3c22e846b92faf921dd';
module.exports = node;
