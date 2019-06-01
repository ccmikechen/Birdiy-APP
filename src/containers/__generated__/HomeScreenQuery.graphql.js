/**
 * @flow
 * @relayHash 05cc7459e4888885ccbecb2a21f80eb9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeScreen_query$ref = any;
export type RankOrder = "NAME" | "%future added value";
export type HomeScreenQueryVariables = {|
  hotCategoryCount: number,
  hotCategoryOrder?: ?RankOrder,
  newProjectCount: number,
|};
export type HomeScreenQueryResponse = {|
  +$fragmentRefs: HomeScreen_query$ref
|};
export type HomeScreenQuery = {|
  variables: HomeScreenQueryVariables,
  response: HomeScreenQueryResponse,
|};
*/


/*
query HomeScreenQuery(
  $hotCategoryCount: Int!
  $hotCategoryOrder: RankOrder
  $newProjectCount: Int!
) {
  ...HomeScreen_query
}

fragment HomeScreen_query on RootQueryType {
  ...ProjectThumbnailsTable_query
  ...CategoriesTable_query
}

fragment ProjectThumbnailsTable_query on RootQueryType {
  projects: allProjects(first: $newProjectCount) {
    edges {
      node {
        ...ProjectSection_project
        id
      }
    }
  }
}

fragment CategoriesTable_query on RootQueryType {
  categories: allProjectCategories(first: $hotCategoryCount, order: $hotCategoryOrder) {
    edges {
      node {
        id
        name
        image
      }
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
    "name": "hotCategoryCount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "hotCategoryOrder",
    "type": "RankOrder",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "newProjectCount",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  (v1/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "HomeScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "projects",
        "name": "allProjects",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "newProjectCount",
            "type": "Int"
          }
        ],
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": [
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
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
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "categories",
        "name": "allProjectCategories",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "hotCategoryCount",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "order",
            "variableName": "hotCategoryOrder",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/)
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
    "name": "HomeScreenQuery",
    "id": null,
    "text": "query HomeScreenQuery(\n  $hotCategoryCount: Int!\n  $hotCategoryOrder: RankOrder\n  $newProjectCount: Int!\n) {\n  ...HomeScreen_query\n}\n\nfragment HomeScreen_query on RootQueryType {\n  ...ProjectThumbnailsTable_query\n  ...CategoriesTable_query\n}\n\nfragment ProjectThumbnailsTable_query on RootQueryType {\n  projects: allProjects(first: $newProjectCount) {\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n      }\n    }\n  }\n}\n\nfragment CategoriesTable_query on RootQueryType {\n  categories: allProjectCategories(first: $hotCategoryCount, order: $hotCategoryOrder) {\n    edges {\n      node {\n        id\n        name\n        image\n      }\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  topic {\n    name\n    id\n  }\n  author {\n    name\n    id\n  }\n  published\n  viewCount\n  likeCount\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9eb84491391449eff2325216dd0aa4fe';
module.exports = node;
