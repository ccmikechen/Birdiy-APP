/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MyPostList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyPostsScreen_query$ref: FragmentReference;
export type MyPostsScreen_query = {|
  +viewer: ?{|
    +id: string
  |},
  +$fragmentRefs: MyPostList_query$ref,
  +$refType: MyPostsScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MyPostsScreen_query",
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
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "MyPostList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2cff469e59b388cd1525b5568228ce8c';
module.exports = node;
