/**
 * @flow
 * @relayHash 2336983da8647f7f3bf01d12f2b22d71
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HotestProjectList_query$ref = any;
export type ProjectFilter = {|
  categories?: ?$ReadOnlyArray<?string>,
  name?: ?string,
  topics?: ?$ReadOnlyArray<?string>,
|};
export type HotestProjectListPaginationQueryVariables = {|
  count: number,
  hotestCursor?: ?string,
  filter?: ?ProjectFilter,
|};
export type HotestProjectListPaginationQueryResponse = {|
  +$fragmentRefs: HotestProjectList_query$ref
|};
export type HotestProjectListPaginationQuery = {|
  variables: HotestProjectListPaginationQueryVariables,
  response: HotestProjectListPaginationQueryResponse,
|};
*/


/*
query HotestProjectListPaginationQuery(
  $count: Int!
  $hotestCursor: String
  $filter: ProjectFilter
) {
  ...HotestProjectList_query
}

fragment HotestProjectList_query on RootQueryType {
  hotest: allProjects(first: $count, after: $hotestCursor, order: HOTEST, filter: $filter) {
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
    "name": "hotestCursor",
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
    "variableName": "hotestCursor",
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
    "value": "HOTEST",
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
    "name": "HotestProjectListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "HotestProjectList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HotestProjectListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "hotest",
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
        "alias": "hotest",
        "name": "allProjects",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "HotestProjectList_hotest",
        "filters": [
          "order",
          "filter"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HotestProjectListPaginationQuery",
    "id": null,
    "text": "query HotestProjectListPaginationQuery(\n  $count: Int!\n  $hotestCursor: String\n  $filter: ProjectFilter\n) {\n  ...HotestProjectList_query\n}\n\nfragment HotestProjectList_query on RootQueryType {\n  hotest: allProjects(first: $count, after: $hotestCursor, order: HOTEST, filter: $filter) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  topic {\n    name\n    id\n  }\n  author {\n    name\n    id\n  }\n  published\n  viewCount\n  likeCount\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87e32c0f2f75e9534b420ba17916d930';
module.exports = node;
