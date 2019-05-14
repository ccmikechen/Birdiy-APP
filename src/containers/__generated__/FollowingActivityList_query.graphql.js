/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PostSection_post$ref = any;
type ProjectActivitySection_project$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FollowingActivityList_query$ref: FragmentReference;
export type FollowingActivityList_query = {|
  +viewer: ?{|
    +following: ?{|
      +pageInfo: {|
        +hasNextPage: boolean,
        +endCursor: ?string,
      |},
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +project: ?{|
            +$fragmentRefs: ProjectActivitySection_project$ref
          |},
          +post: ?{|
            +$fragmentRefs: PostSection_post$ref
          |},
          +insertedAt: ?any,
        |}
      |}>,
    |}
  |},
  +$refType: FollowingActivityList_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FollowingActivityList_query",
  "type": "RootQueryType",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "followingCursor",
        "direction": "forward",
        "path": [
          "viewer",
          "following"
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
      "name": "followingCursor",
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
          "alias": "following",
          "name": "__FollowingActivityList_following_connection",
          "storageKey": null,
          "args": null,
          "concreteType": "ActivityConnection",
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
              "concreteType": "ActivityEdge",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Activity",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "project",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "Project",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "FragmentSpread",
                          "name": "ProjectActivitySection_project",
                          "args": null
                        }
                      ]
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "post",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "Post",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "FragmentSpread",
                          "name": "PostSection_post",
                          "args": null
                        }
                      ]
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "insertedAt",
                      "args": null,
                      "storageKey": null
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
(node/*: any*/).hash = '9ca4eb17884f01f3fe71ce57d5ed7f00';
module.exports = node;
