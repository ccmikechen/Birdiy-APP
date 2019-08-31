/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProjectCommentReplyList_comment$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectCommentListItem_comment$ref: FragmentReference;
export type ProjectCommentListItem_comment = {|
  +id: string,
  +user: {|
    +name: string,
    +image: ?string,
  |},
  +message: string,
  +insertedAt: ?any,
  +$fragmentRefs: ProjectCommentReplyList_comment$ref,
  +$refType: ProjectCommentListItem_comment$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectCommentListItem_comment",
  "type": "ProjectComment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
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
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "image",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "message",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "insertedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ProjectCommentReplyList_comment",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a1b6ba9b3086465dcab139cbd756427f';
module.exports = node;
