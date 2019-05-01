/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PostSection_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyPostList_query$ref: FragmentReference;
export type MyPostList_query = {|
  +viewer: ?{|
    +posts: ?{|
      +pageInfo: {|
        +hasNextPage: boolean,
        +endCursor: ?string,
      |},
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +$fragmentRefs: PostSection_post$ref
        |}
      |}>,
    |}
  |},
  +$refType: MyPostList_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MyPostList_query",
  "type": "RootQueryType",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "viewer",
          "posts"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    }
  ],
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
          "kind": "LinkedField",
          "alias": "posts",
          "name": "__MyPostList_posts_connection",
          "storageKey": null,
          "args": null,
          "concreteType": "PostConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "pageInfo",
              "storageKey": null,
              "args": null,
              "concreteType": "PageInfo",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "hasNextPage",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "endCursor",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "PostEdge",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Post",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "FragmentSpread",
                      "name": "PostSection_post",
                      "args": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "__typename",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "cursor",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '72db426583710772926eb7097b6c622d';
module.exports = node;
