/**
 * @flow
 * @relayHash c34892326008852933ea21afa743604a
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
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "order",
    "value": "NEWEST",
    "type": "ProjectOrder"
  }
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
  (v5/*: any*/),
  (v4/*: any*/)
],
v7 = [
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
            "name": "topic",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectTopic",
            "plural": false,
            "selections": (v6/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v6/*: any*/)
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
],
v8 = [
  "order",
  "filter"
],
v9 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "hotestCursor",
    "type": "String"
  },
  (v1/*: any*/),
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "order",
    "value": "HOTEST",
    "type": "ProjectOrder"
  }
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
        "selections": (v7/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "newest",
        "name": "allProjects",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "NewestProjectList_newest",
        "filters": (v8/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": "hotest",
        "name": "allProjects",
        "storageKey": null,
        "args": (v9/*: any*/),
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v7/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "hotest",
        "name": "allProjects",
        "args": (v9/*: any*/),
        "handle": "connection",
        "key": "HotestProjectList_hotest",
        "filters": (v8/*: any*/)
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectsScreenQuery",
    "id": null,
    "text": "query ProjectsScreenQuery(\n  $count: Int!\n  $newestCursor: String\n  $hotestCursor: String\n  $filter: ProjectFilter\n) {\n  ...ProjectsScreen_query\n}\n\nfragment ProjectsScreen_query on RootQueryType {\n  ...NewestProjectList_query\n  ...HotestProjectList_query\n}\n\nfragment NewestProjectList_query on RootQueryType {\n  newest: allProjects(first: $count, after: $newestCursor, order: NEWEST, filter: $filter) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment HotestProjectList_query on RootQueryType {\n  hotest: allProjects(first: $count, after: $hotestCursor, order: HOTEST, filter: $filter) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  topic {\n    name\n    id\n  }\n  author {\n    name\n    id\n  }\n  published\n  viewCount\n  likeCount\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e93e53c36e02a63e81b137f44395271';
module.exports = node;
