/**
 * @flow
 * @relayHash 57d1cd2ec43e05514ac4b7e1500fd8d8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewestProjectList_query$ref = any;
export type NewestProjectListPaginationQueryVariables = {|
  count: number,
  newestCursor?: ?string,
|};
export type NewestProjectListPaginationQueryResponse = {|
  +$fragmentRefs: NewestProjectList_query$ref
|};
export type NewestProjectListPaginationQuery = {|
  variables: NewestProjectListPaginationQueryVariables,
  response: NewestProjectListPaginationQueryResponse,
|};
*/


/*
query NewestProjectListPaginationQuery(
  $count: Int!
  $newestCursor: String
) {
  ...NewestProjectList_query
}

fragment NewestProjectList_query on RootQueryType {
  newest: allProjects(first: $count, after: $newestCursor) {
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
}

fragment ProjectSection_project on Project {
  id
  name
  image
  author {
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
    "name": "newestCursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "newestCursor",
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewestProjectListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "NewestProjectList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewestProjectListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "newest",
        "name": "allProjects",
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  (v2/*: any*/),
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
                      (v2/*: any*/)
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
        "alias": "newest",
        "name": "allProjects",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "NewestProjectList_newest",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewestProjectListPaginationQuery",
    "id": null,
    "text": "query NewestProjectListPaginationQuery(\n  $count: Int!\n  $newestCursor: String\n) {\n  ...NewestProjectList_query\n}\n\nfragment NewestProjectList_query on RootQueryType {\n  newest: allProjects(first: $count, after: $newestCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  author {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3be95a8468047506730d4b4f864b4f22';
module.exports = node;
