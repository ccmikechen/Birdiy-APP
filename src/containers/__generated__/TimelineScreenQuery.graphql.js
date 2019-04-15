/**
 * @flow
 * @relayHash 4db6f3a2ea4d7a316a78c7953631dedc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TimelineScreen_query$ref = any;
export type TimelineScreenQueryVariables = {|
  count: number,
  all_cursor?: ?string,
  following_cursor?: ?string,
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
  $all_cursor: String
  $following_cursor: String
) {
  ...TimelineScreen_query
}

fragment TimelineScreen_query on RootQueryType {
  all: allPosts(first: $count, after: $all_cursor) {
    ...AllPostList_posts
  }
  following: allPosts(first: $count, after: $following_cursor) {
    ...FollowingPostList_posts
  }
}

fragment AllPostList_posts on PostConnection {
  pageInfo {
    hasNextPage
    endCursor
  }
  edges {
    node {
      ...PostSection_post
      id
    }
  }
}

fragment FollowingPostList_posts on PostConnection {
  pageInfo {
    hasNextPage
    endCursor
  }
  edges {
    node {
      ...PostSection_post
      id
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
    "name": "all_cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "following_cursor",
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
v4 = [
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
              (v2/*: any*/)
            ]
          },
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
  }
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
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "all_cursor",
            "type": "String"
          },
          (v1/*: any*/)
        ],
        "concreteType": "PostConnection",
        "plural": false,
        "selections": (v4/*: any*/)
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
          (v1/*: any*/)
        ],
        "concreteType": "PostConnection",
        "plural": false,
        "selections": (v4/*: any*/)
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TimelineScreenQuery",
    "id": null,
    "text": "query TimelineScreenQuery(\n  $count: Int!\n  $all_cursor: String\n  $following_cursor: String\n) {\n  ...TimelineScreen_query\n}\n\nfragment TimelineScreen_query on RootQueryType {\n  all: allPosts(first: $count, after: $all_cursor) {\n    ...AllPostList_posts\n  }\n  following: allPosts(first: $count, after: $following_cursor) {\n    ...FollowingPostList_posts\n  }\n}\n\nfragment AllPostList_posts on PostConnection {\n  pageInfo {\n    hasNextPage\n    endCursor\n  }\n  edges {\n    node {\n      ...PostSection_post\n      id\n    }\n  }\n}\n\nfragment FollowingPostList_posts on PostConnection {\n  pageInfo {\n    hasNextPage\n    endCursor\n  }\n  edges {\n    node {\n      ...PostSection_post\n      id\n    }\n  }\n}\n\nfragment PostSection_post on Post {\n  author {\n    name\n    image\n  }\n  insertedAt\n  message\n  thumbnail {\n    image\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '077d605c5d99f33e778284f1e43af16e';
module.exports = node;
