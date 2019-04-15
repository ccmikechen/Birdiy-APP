/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AllPostList_posts$ref = any;
type FollowingPostList_posts$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimelineScreen_query$ref: FragmentReference;
export type TimelineScreen_query = {|
  +all: ?{|
    +$fragmentRefs: AllPostList_posts$ref
  |},
  +following: ?{|
    +$fragmentRefs: FollowingPostList_posts$ref
  |},
  +$refType: TimelineScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count",
  "type": "Int"
};
return {
  "kind": "Fragment",
  "name": "TimelineScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "all_cursor",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "following_cursor",
      "type": "String"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "all",
      "name": "allPosts",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "all_cursor",
          "type": "String"
        },
        (v0/*: any*/)
      ],
      "concreteType": "PostConnection",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "AllPostList_posts",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "following",
      "name": "allPosts",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "following_cursor",
          "type": "String"
        },
        (v0/*: any*/)
      ],
      "concreteType": "PostConnection",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "FollowingPostList_posts",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '9462690e3313ecc3e745fb0bc73a8550';
module.exports = node;
