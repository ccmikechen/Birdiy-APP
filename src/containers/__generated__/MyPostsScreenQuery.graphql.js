/**
 * @flow
 * @relayHash 8a9987fe48e4950105069939accb0cbb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MyPostsScreen_query$ref = any;
export type MyPostsScreenQueryVariables = {|
  count: number,
  cursor?: ?string,
  postId?: ?string,
|};
export type MyPostsScreenQueryResponse = {|
  +$fragmentRefs: MyPostsScreen_query$ref
|};
export type MyPostsScreenQuery = {|
  variables: MyPostsScreenQueryVariables,
  response: MyPostsScreenQueryResponse,
|};
*/


/*
query MyPostsScreenQuery(
  $count: Int!
  $cursor: String
  $postId: ID
) {
  ...MyPostsScreen_query
}

fragment MyPostsScreen_query on RootQueryType {
  viewer {
    id
  }
  ...MyPostList_query
}

fragment MyPostList_query on RootQueryType {
  viewer {
    posts(first: $count, after: $cursor, beforeId: $postId) {
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
  photosCount
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
    "name": "postId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "beforeId",
    "variableName": "postId",
    "type": "ID"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  }
],
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
    "name": "MyPostsScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "MyPostsScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MyPostsScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
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
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "posts",
            "storageKey": null,
            "args": (v2/*: any*/),
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
                      (v1/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "author",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
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
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "photosCount",
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
                          (v1/*: any*/)
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
                          (v1/*: any*/),
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
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "MyPostList_posts",
            "filters": [
              "beforeId"
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MyPostsScreenQuery",
    "id": null,
    "text": "query MyPostsScreenQuery(\n  $count: Int!\n  $cursor: String\n  $postId: ID\n) {\n  ...MyPostsScreen_query\n}\n\nfragment MyPostsScreen_query on RootQueryType {\n  viewer {\n    id\n  }\n  ...MyPostList_query\n}\n\nfragment MyPostList_query on RootQueryType {\n  viewer {\n    posts(first: $count, after: $cursor, beforeId: $postId) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...PostSection_post\n          id\n          __typename\n        }\n        cursor\n      }\n    }\n    id\n  }\n}\n\nfragment PostSection_post on Post {\n  id\n  author {\n    id\n    name\n    image\n    following\n  }\n  insertedAt\n  message\n  photosCount\n  thumbnail {\n    image\n    id\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f3af0a26e4627d09295b2255859120f2';
module.exports = node;
