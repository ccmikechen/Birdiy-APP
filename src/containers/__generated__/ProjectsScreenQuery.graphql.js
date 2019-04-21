/**
 * @flow
 * @relayHash c5cbd778fecd1f016aea74306bcd3fc7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectsScreen_query$ref = any;
export type ProjectsScreenQueryVariables = {|
  count: number,
  newestCursor?: ?string,
  hotestCursor?: ?string,
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
) {
  ...ProjectsScreen_query
}

fragment ProjectsScreen_query on RootQueryType {
  ...NewestProjectList_query
  ...HotestProjectList_query
  categories: allProjectCategories(first: 100000, order: NAME) {
    edges {
      node {
        id
        name
        image
      }
    }
  }
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

fragment HotestProjectList_query on RootQueryType {
  hotest: allProjects(first: $count, after: $hotestCursor) {
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
  },
  {
    "kind": "LocalArgument",
    "name": "hotestCursor",
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
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "newestCursor",
    "type": "String"
  },
  (v1/*: any*/)
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v4/*: any*/)
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
],
v7 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "hotestCursor",
    "type": "String"
  },
  (v1/*: any*/)
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
        "args": (v2/*: any*/),
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v6/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "newest",
        "name": "allProjects",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "NewestProjectList_newest",
        "filters": null
      },
      {
        "kind": "LinkedField",
        "alias": "hotest",
        "name": "allProjects",
        "storageKey": null,
        "args": (v7/*: any*/),
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v6/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "hotest",
        "name": "allProjects",
        "args": (v7/*: any*/),
        "handle": "connection",
        "key": "HotestProjectList_hotest",
        "filters": null
      },
      {
        "kind": "LinkedField",
        "alias": "categories",
        "name": "allProjectCategories",
        "storageKey": "allProjectCategories(first:100000,order:\"NAME\")",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 100000,
            "type": "Int"
          },
          {
            "kind": "Literal",
            "name": "order",
            "value": "NAME",
            "type": "RankOrder"
          }
        ],
        "concreteType": "ProjectCategoryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectCategoryEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "ProjectCategory",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectsScreenQuery",
    "id": null,
    "text": "query ProjectsScreenQuery(\n  $count: Int!\n  $newestCursor: String\n  $hotestCursor: String\n) {\n  ...ProjectsScreen_query\n}\n\nfragment ProjectsScreen_query on RootQueryType {\n  ...NewestProjectList_query\n  ...HotestProjectList_query\n  categories: allProjectCategories(first: 100000, order: NAME) {\n    edges {\n      node {\n        id\n        name\n        image\n      }\n    }\n  }\n}\n\nfragment NewestProjectList_query on RootQueryType {\n  newest: allProjects(first: $count, after: $newestCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment HotestProjectList_query on RootQueryType {\n  hotest: allProjects(first: $count, after: $hotestCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  author {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b9ae72e3ca9a801ec67cd1fbed16378e';
module.exports = node;
