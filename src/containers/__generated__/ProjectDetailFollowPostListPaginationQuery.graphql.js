/**
 * @flow
 * @relayHash 5964bfe2769716c22c624edc0b8d5b33
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectDetailFollowPostList_project$ref = any;
export type ProjectDetailFollowPostListPaginationQueryVariables = {|
  projectId: string,
  relatedPostsCount: number,
  relatedPostsCursor?: ?string,
|};
export type ProjectDetailFollowPostListPaginationQueryResponse = {|
  +project: ?{|
    +$fragmentRefs: ProjectDetailFollowPostList_project$ref
  |}
|};
export type ProjectDetailFollowPostListPaginationQuery = {|
  variables: ProjectDetailFollowPostListPaginationQueryVariables,
  response: ProjectDetailFollowPostListPaginationQueryResponse,
|};
*/


/*
query ProjectDetailFollowPostListPaginationQuery(
  $projectId: ID!
  $relatedPostsCount: Int!
  $relatedPostsCursor: String
) {
  project(id: $projectId) {
    ...ProjectDetailFollowPostList_project
    id
  }
}

fragment ProjectDetailFollowPostList_project on Project {
  relatedPosts(first: $relatedPostsCount, after: $relatedPostsCursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        thumbnail {
          image
          id
        }
        author {
          image
          name
        }
        __typename
      }
      cursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "projectId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "relatedPostsCount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "relatedPostsCursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "projectId",
    "type": "ID!"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "relatedPostsCursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "relatedPostsCount",
    "type": "Int"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
    "name": "ProjectDetailFollowPostListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProjectDetailFollowPostList_project",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProjectDetailFollowPostListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "relatedPosts",
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
                      (v3/*: any*/),
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
                          (v3/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "author",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          }
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
            "name": "relatedPosts",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "ProjectDetailFollowPostList_relatedPosts",
            "filters": null
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectDetailFollowPostListPaginationQuery",
    "id": null,
    "text": "query ProjectDetailFollowPostListPaginationQuery(\n  $projectId: ID!\n  $relatedPostsCount: Int!\n  $relatedPostsCursor: String\n) {\n  project(id: $projectId) {\n    ...ProjectDetailFollowPostList_project\n    id\n  }\n}\n\nfragment ProjectDetailFollowPostList_project on Project {\n  relatedPosts(first: $relatedPostsCount, after: $relatedPostsCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        thumbnail {\n          image\n          id\n        }\n        author {\n          image\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a82e40952e14043d44a065599fb9c24e';
module.exports = node;
