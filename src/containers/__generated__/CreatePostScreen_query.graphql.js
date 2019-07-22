/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreatePostScreen_query$ref: FragmentReference;
export type CreatePostScreen_query = {|
  +viewer: ?{|
    +id: string
  |},
  +$refType: CreatePostScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CreatePostScreen_query",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8898c299d1863e077415537bdb6ec6fe';
module.exports = node;
