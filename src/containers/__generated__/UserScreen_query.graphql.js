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
declare export opaque type UserScreen_query$ref: FragmentReference;
export type UserScreen_query = {|
  +user: ?{|
    +$fragmentRefs: ProfileSection_profile$ref & ProfileTabMenu_profile$ref
  |},
  +$refType: UserScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id",
      "type": "ID!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id",
          "type": "ID!"
        }
      ],
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
(node/*: any*/).hash = '83d80412301e730f094993e5f9c59c44';
module.exports = node;
