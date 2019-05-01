/**
 * @flow
 * @relayHash c2af45837d001e7e8a77dbb87cc68825
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserPostsScreen_query$ref = any;
export type UserPostsScreenQueryVariables = {|
  count: number,
  cursor?: ?string,
  id: string,
|};
export type UserPostsScreenQueryResponse = {|
  +$fragmentRefs: UserPostsScreen_query$ref
|};
export type UserPostsScreenQuery = {|
  variables: UserPostsScreenQueryVariables,
  response: UserPostsScreenQueryResponse,
|};
*/


/*
query UserPostsScreenQuery(
  $count: Int!
  $cursor: String
  $id: ID!
) {
  ...UserPostsScreen_query
}

fragment UserPostsScreen_query on RootQueryType {
  ...UserPostList_query
}

fragment UserPostList_query on RootQueryType {
  user(id: $id) {
    posts(first: $count, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...PostSection_post
          id
          __typename
        }
        cursor
      }
    }
    id
  }
}

fragment PostSection_post on Post {
  id
  author {
    id
    name
    image
    following
  }
  insertedAt
  message
  thumbnail {
    image
    id
  }
  relatedProjectType
  relatedProjectName
  relatedProject {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
  },
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserPostsScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "UserPostsScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserPostsScreenQuery",
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
            "name": "posts",
            "storageKey": null,
            "args": (v1/*: any*/),
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
                      (v2/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "author",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "following",
                            "args": null,
                            "storageKey": null
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
                        "name": "message",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "thumbnail",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PostPhoto",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "relatedProjectType",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "relatedProjectName",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "relatedProject",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Project",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/)
                        ]
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
            "name": "posts",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "UserPostList_posts",
            "filters": null
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserPostsScreenQuery",
    "id": null,
    "text": "query UserPostsScreenQuery(\n  $count: Int!\n  $cursor: String\n  $id: ID!\n) {\n  ...UserPostsScreen_query\n}\n\nfragment UserPostsScreen_query on RootQueryType {\n  ...UserPostList_query\n}\n\nfragment UserPostList_query on RootQueryType {\n  user(id: $id) {\n    posts(first: $count, after: $cursor) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...PostSection_post\n          id\n          __typename\n        }\n        cursor\n      }\n    }\n    id\n  }\n}\n\nfragment PostSection_post on Post {\n  id\n  author {\n    id\n    name\n    image\n    following\n  }\n  insertedAt\n  message\n  thumbnail {\n    image\n    id\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9363ded52067fea78ba6ac565dd291e9';
module.exports = node;
