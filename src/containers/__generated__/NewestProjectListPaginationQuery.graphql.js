/**
 * @flow
 * @relayHash 5744b239d320b4de27327160420600f3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewestProjectList_query$ref = any;
export type ProjectFilter = {|
  categories?: ?$ReadOnlyArray<?string>,
  name?: ?string,
  topics?: ?$ReadOnlyArray<?string>,
|};
export type NewestProjectListPaginationQueryVariables = {|
  count: number,
  newestCursor?: ?string,
  filter?: ?ProjectFilter,
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
  $filter: ProjectFilter
) {
  ...NewestProjectList_query
}

fragment NewestProjectList_query on RootQueryType {
  newest: allProjects(first: $count, after: $newestCursor, order: NEWEST, filter: $filter) {
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
  topic {
    name
    id
  }
  author {
    name
    id
  }
  published
  viewCount
  likeCount
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
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "ProjectFilter",
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
    "name": "filter",
    "variableName": "filter",
    "type": "ProjectFilter"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  },
  {
    "kind": "Literal",
    "name": "order",
    "value": "NEWEST",
    "type": "ProjectOrder"
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
v4 = [
  (v3/*: any*/),
  (v2/*: any*/)
];
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
                    "name": "topic",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ProjectTopic",
                    "plural": false,
                    "selections": (v4/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "author",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": (v4/*: any*/)
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
                    "name": "viewCount",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "likeCount",
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
        "alias": "newest",
        "name": "allProjects",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "NewestProjectList_newest",
        "filters": [
          "order",
          "filter"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewestProjectListPaginationQuery",
    "id": null,
    "text": "query NewestProjectListPaginationQuery(\n  $count: Int!\n  $newestCursor: String\n  $filter: ProjectFilter\n) {\n  ...NewestProjectList_query\n}\n\nfragment NewestProjectList_query on RootQueryType {\n  newest: allProjects(first: $count, after: $newestCursor, order: NEWEST, filter: $filter) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  topic {\n    name\n    id\n  }\n  author {\n    name\n    id\n  }\n  published\n  viewCount\n  likeCount\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '91a75b4b338f05884db44ae209b1d2f9';
module.exports = node;
