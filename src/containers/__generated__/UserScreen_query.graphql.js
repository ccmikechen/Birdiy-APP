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
    +following: boolean,
    +$fragmentRefs: ProfileSection_profile$ref & ProfileTabMenu_profile$ref,
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "following",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9ac571169c2a82f744e600f5040cda2a';
module.exports = node;
