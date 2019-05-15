/**
 * @flow
 * @relayHash dbc3b0273173883ca8c5c4652ba2aa0d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RecentViewedProjectList_query$ref = any;
export type RecentViewedProjectListPaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
|};
export type RecentViewedProjectListPaginationQueryResponse = {|
  +$fragmentRefs: RecentViewedProjectList_query$ref
|};
export type RecentViewedProjectListPaginationQuery = {|
  variables: RecentViewedProjectListPaginationQueryVariables,
  response: RecentViewedProjectListPaginationQueryResponse,
|};
*/


/*
query RecentViewedProjectListPaginationQuery(
  $count: Int!
  $cursor: String
) {
  ...RecentViewedProjectList_query
}

fragment RecentViewedProjectList_query on RootQueryType {
  viewer {
    projects: viewedProjects(first: $count, after: $cursor) {
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
    "name": "RecentViewedProjectListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "RecentViewedProjectList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RecentViewedProjectListPaginationQuery",
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
          {
            "kind": "LinkedField",
            "alias": "projects",
            "name": "viewedProjects",
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
            "name": "viewedProjects",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "RecentViewedProjectList_projects",
            "filters": null
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RecentViewedProjectListPaginationQuery",
    "id": null,
    "text": "query RecentViewedProjectListPaginationQuery(\n  $count: Int!\n  $cursor: String\n) {\n  ...RecentViewedProjectList_query\n}\n\nfragment RecentViewedProjectList_query on RootQueryType {\n  viewer {\n    projects: viewedProjects(first: $count, after: $cursor) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...ProjectSection_project\n          id\n          __typename\n        }\n        cursor\n      }\n    }\n    id\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  author {\n    name\n    id\n  }\n  published\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1e4097403166fe38f35111c211776d33';
module.exports = node;
