/**
 * @flow
 * @relayHash b4ea2b7a9aae2503101672dea9cf7e32
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AllPostList_query$ref = any;
export type AllPostListPaginationQueryVariables = {|
  count: number,
  allCursor?: ?string,
|};
export type AllPostListPaginationQueryResponse = {|
  +$fragmentRefs: AllPostList_query$ref
|};
export type AllPostListPaginationQuery = {|
  variables: AllPostListPaginationQueryVariables,
  response: AllPostListPaginationQueryResponse,
|};
*/


/*
query AllPostListPaginationQuery(
  $count: Int!
  $allCursor: String
) {
  ...AllPostList_query
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

fragment PostSection_post on Post {
  id
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
    "name": "allCursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "allCursor",
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
    "name": "AllPostListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AllPostList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AllPostListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "all",
        "name": "allPosts",
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
        "alias": "all",
        "name": "allPosts",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "AllPostList_all",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AllPostListPaginationQuery",
    "id": null,
    "text": "query AllPostListPaginationQuery(\n  $count: Int!\n  $allCursor: String\n) {\n  ...AllPostList_query\n}\n\nfragment AllPostList_query on RootQueryType {\n  all: allPosts(first: $count, after: $allCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...PostSection_post\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment PostSection_post on Post {\n  id\n  author {\n    name\n    image\n  }\n  insertedAt\n  message\n  thumbnail {\n    image\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b0a0d8a8c4c343eaf551e2ebc9bace7';
module.exports = node;
