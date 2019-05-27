/**
 * @flow
 * @relayHash 89954b23ae68acab819fbb2148495240
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectsScreen_query$ref = any;
export type ProjectFilter = {|
  categories?: ?$ReadOnlyArray<?string>,
  name?: ?string,
  topics?: ?$ReadOnlyArray<?string>,
|};
export type ProjectsScreenQueryVariables = {|
  count: number,
  newestCursor?: ?string,
  hotestCursor?: ?string,
  filter?: ?ProjectFilter,
|};
export type ProjectsScreenQueryResponse = {|
  +$fragmentRefs: ProjectsScreen_query$ref
|};
export type ProjectsScreenQuery = {|
  variables: ProjectsScreenQueryVariables,
  response: ProjectsScreenQueryResponse,
|};
*/


/*
query ProjectsScreenQuery(
  $count: Int!
  $newestCursor: String
  $hotestCursor: String
  $filter: ProjectFilter
) {
  ...ProjectsScreen_query
}

fragment ProjectsScreen_query on RootQueryType {
  ...NewestProjectList_query
  ...HotestProjectList_query
}

fragment NewestProjectList_query on RootQueryType {
  newest: allProjects(first: $count, after: $newestCursor, filter: $filter) {
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

fragment HotestProjectList_query on RootQueryType {
  hotest: allProjects(first: $count, after: $hotestCursor, filter: $filter) {
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
    "name": "newestCursor",
    "type": "String",
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
v1 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "filter",
  "type": "ProjectFilter"
},
v2 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count",
  "type": "Int"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "newestCursor",
    "type": "String"
  },
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
          (v4/*: any*/),
          (v5/*: any*/),
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
              (v5/*: any*/),
              (v4/*: any*/)
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
],
v7 = [
  "filter"
],
v8 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "hotestCursor",
    "type": "String"
  },
  (v1/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProjectsScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProjectsScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProjectsScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "newest",
        "name": "allProjects",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v6/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "newest",
        "name": "allProjects",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "NewestProjectList_newest",
        "filters": (v7/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": "hotest",
        "name": "allProjects",
        "storageKey": null,
        "args": (v8/*: any*/),
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v6/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "hotest",
        "name": "allProjects",
        "args": (v8/*: any*/),
        "handle": "connection",
        "key": "HotestProjectList_hotest",
        "filters": (v7/*: any*/)
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectsScreenQuery",
    "id": null,
    "text": "query ProjectsScreenQuery(\n  $count: Int!\n  $newestCursor: String\n  $hotestCursor: String\n  $filter: ProjectFilter\n) {\n  ...ProjectsScreen_query\n}\n\nfragment ProjectsScreen_query on RootQueryType {\n  ...NewestProjectList_query\n  ...HotestProjectList_query\n}\n\nfragment NewestProjectList_query on RootQueryType {\n  newest: allProjects(first: $count, after: $newestCursor, filter: $filter) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment HotestProjectList_query on RootQueryType {\n  hotest: allProjects(first: $count, after: $hotestCursor, filter: $filter) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  author {\n    name\n    id\n  }\n  published\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e93e53c36e02a63e81b137f44395271';
module.exports = node;
