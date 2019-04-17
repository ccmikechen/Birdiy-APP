/**
 * @flow
 * @relayHash 2257581e151f27b25a9304e25feb6e85
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TimelineScreen_query$ref = any;
export type TimelineScreenQueryVariables = {|
  count: number,
  allCursor?: ?string,
  followingCursor?: ?string,
|};
export type TimelineScreenQueryResponse = {|
  +$fragmentRefs: TimelineScreen_query$ref
|};
export type TimelineScreenQuery = {|
  variables: TimelineScreenQueryVariables,
  response: TimelineScreenQueryResponse,
|};
*/


/*
query TimelineScreenQuery(
  $count: Int!
  $allCursor: String
  $followingCursor: String
) {
  ...TimelineScreen_query
}

fragment TimelineScreen_query on RootQueryType {
  ...AllPostList_query
  ...FollowingPostList_query
}

fragment AllPostList_query on RootQueryType {
  all: allPosts(first: $count, after: $allCursor) {
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
    "name": "allCursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "followingCursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count",
  "type": "Int"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "allCursor",
    "type": "String"
  },
  (v1/*: any*/)
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
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = [
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
              (v3/*: any*/),
              (v4/*: any*/)
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
              (v4/*: any*/)
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
              (v3/*: any*/),
              (v5/*: any*/)
            ]
          },
          (v5/*: any*/),
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
],
v7 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "followingCursor",
    "type": "String"
  },
  (v1/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TimelineScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "TimelineScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TimelineScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "all",
        "name": "allPosts",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "PostConnection",
        "plural": false,
        "selections": (v6/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "all",
        "name": "allPosts",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "AllPostList_all",
        "filters": null
      },
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
            "args": (v7/*: any*/),
            "concreteType": "PostConnection",
            "plural": false,
            "selections": (v6/*: any*/)
          },
          {
            "kind": "LinkedHandle",
            "alias": "following",
            "name": "followingUserPosts",
            "args": (v7/*: any*/),
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
    "name": "TimelineScreenQuery",
    "id": null,
    "text": "query TimelineScreenQuery(\n  $count: Int!\n  $allCursor: String\n  $followingCursor: String\n) {\n  ...TimelineScreen_query\n}\n\nfragment TimelineScreen_query on RootQueryType {\n  ...AllPostList_query\n  ...FollowingPostList_query\n}\n\nfragment AllPostList_query on RootQueryType {\n  all: allPosts(first: $count, after: $allCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...PostSection_post\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment FollowingPostList_query on RootQueryType {\n  viewer {\n    following: followingUserPosts(first: $count, after: $followingCursor) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...PostSection_post\n          id\n          __typename\n        }\n        cursor\n      }\n    }\n  }\n}\n\nfragment PostSection_post on Post {\n  author {\n    name\n    image\n  }\n  insertedAt\n  message\n  thumbnail {\n    image\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8740b4c56c2bb496fd494b9000bb1a4b';
module.exports = node;
