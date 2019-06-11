/**
 * @flow
 * @relayHash c2ae78fc08f32f12cbf1b00fdc1b70c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FollowerList_query$ref = any;
export type FollowerListPaginationQueryVariables = {|
  id: string,
  count: number,
  cursor?: ?string,
|};
export type FollowerListPaginationQueryResponse = {|
  +$fragmentRefs: FollowerList_query$ref
|};
export type FollowerListPaginationQuery = {|
  variables: FollowerListPaginationQueryVariables,
  response: FollowerListPaginationQueryResponse,
|};
*/


/*
query FollowerListPaginationQuery(
  $id: ID!
  $count: Int!
  $cursor: String
) {
  ...FollowerList_query
}

fragment FollowerList_query on RootQueryType {
  user(id: $id) {
    followedUsers(first: $count, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...UserListItem_user
          id
          __typename
        }
        cursor
      }
    }
    id
  }
}

fragment UserListItem_user on User {
  id
  name
  image
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FollowerListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "FollowerList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FollowerListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
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
            "kind": "LinkedField",
            "alias": null,
            "name": "followedUsers",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "UserConnection",
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
                "concreteType": "UserEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
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
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "followedUsers",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "FollowerList_followedUsers",
            "filters": null
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FollowerListPaginationQuery",
    "id": null,
    "text": "query FollowerListPaginationQuery(\n  $id: ID!\n  $count: Int!\n  $cursor: String\n) {\n  ...FollowerList_query\n}\n\nfragment FollowerList_query on RootQueryType {\n  user(id: $id) {\n    followedUsers(first: $count, after: $cursor) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...UserListItem_user\n          id\n          __typename\n        }\n        cursor\n      }\n    }\n    id\n  }\n}\n\nfragment UserListItem_user on User {\n  id\n  name\n  image\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3bfada496f08befbd70f7eba12e572c3';
module.exports = node;
