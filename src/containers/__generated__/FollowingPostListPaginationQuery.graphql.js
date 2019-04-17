/**
 * @flow
 * @relayHash 3e849e6f6d503b7cf874c4b21bf4e6d9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FollowingPostList_query$ref = any;
export type FollowingPostListPaginationQueryVariables = {|
  count: number,
  followingCursor?: ?string,
|};
export type FollowingPostListPaginationQueryResponse = {|
  +$fragmentRefs: FollowingPostList_query$ref
|};
export type FollowingPostListPaginationQuery = {|
  variables: FollowingPostListPaginationQueryVariables,
  response: FollowingPostListPaginationQueryResponse,
|};
*/


/*
query FollowingPostListPaginationQuery(
  $count: Int!
  $followingCursor: String
) {
  ...FollowingPostList_query
}

fragment FollowingPostList_query on RootQueryType {
  viewer {
    following: followingUserPosts(first: $count, after: $followingCursor) {
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
  }
}

fragment PostSection_post on Post {
  author {
    name
    image
  }
  insertedAt
  message
  thumbnail {
    image
  }
  relatedProjectType
  relatedProjectName
  relatedProject {
    name
    id
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
    "name": "followingCursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "followingCursor",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v4 = {
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
    "name": "FollowingPostListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "FollowingPostList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FollowingPostListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "following",
            "name": "followingUserPosts",
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
                          (v3/*: any*/)
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
                          (v3/*: any*/)
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
                          (v4/*: any*/)
                        ]
                      },
                      (v4/*: any*/),
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
            "alias": "following",
            "name": "followingUserPosts",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "FollowingPostList_following",
            "filters": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FollowingPostListPaginationQuery",
    "id": null,
    "text": "query FollowingPostListPaginationQuery(\n  $count: Int!\n  $followingCursor: String\n) {\n  ...FollowingPostList_query\n}\n\nfragment FollowingPostList_query on RootQueryType {\n  viewer {\n    following: followingUserPosts(first: $count, after: $followingCursor) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...PostSection_post\n          id\n          __typename\n        }\n        cursor\n      }\n    }\n  }\n}\n\nfragment PostSection_post on Post {\n  author {\n    name\n    image\n  }\n  insertedAt\n  message\n  thumbnail {\n    image\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b0fd834ad57524b2ab319dbb6b20d635';
module.exports = node;
