/**
 * @flow
 * @relayHash ee6cc618715e8696fd4325b9bd3938b1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserFavoriteProjectList_query$ref = any;
export type UserFavoriteProjectListPaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
  id: string,
|};
export type UserFavoriteProjectListPaginationQueryResponse = {|
  +$fragmentRefs: UserFavoriteProjectList_query$ref
|};
export type UserFavoriteProjectListPaginationQuery = {|
  variables: UserFavoriteProjectListPaginationQueryVariables,
  response: UserFavoriteProjectListPaginationQueryResponse,
|};
*/


/*
query UserFavoriteProjectListPaginationQuery(
  $count: Int!
  $cursor: String
  $id: ID!
) {
  ...UserFavoriteProjectList_query
}

fragment UserFavoriteProjectList_query on RootQueryType {
  user(id: $id) {
    projects: favoriteProjects(first: $count, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...ProjectSection_project
          id
          __typename
        }
        cursor
      }
    }
    id
  }
}

fragment ProjectSection_project on Project {
  id
  name
  image
  author {
    name
    id
  }
  published
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserFavoriteProjectListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "UserFavoriteProjectList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserFavoriteProjectListPaginationQuery",
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
            "alias": "projects",
            "name": "favoriteProjects",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "ProjectConnection",
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
                "concreteType": "ProjectEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Project",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "image",
                        "args": null,
                        "storageKey": null
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
                          (v3/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "published",
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
            "alias": "projects",
            "name": "favoriteProjects",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "UserFavoriteProjectList_projects",
            "filters": null
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserFavoriteProjectListPaginationQuery",
    "id": null,
    "text": "query UserFavoriteProjectListPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $id: ID!\n) {\n  ...UserFavoriteProjectList_query\n}\n\nfragment UserFavoriteProjectList_query on RootQueryType {\n  user(id: $id) {\n    projects: favoriteProjects(first: $count, after: $cursor) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...ProjectSection_project\n          id\n          __typename\n        }\n        cursor\n      }\n    }\n    id\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  author {\n    name\n    id\n  }\n  published\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e71aae3c9d38f58833523d5d4767287e';
module.exports = node;
