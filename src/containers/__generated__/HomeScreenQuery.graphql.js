/**
 * @flow
 * @relayHash 01cb9e3209eda204f0b21ed3bc8e2b36
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeScreen_query$ref = any;
export type RankOrder = "NAME" | "%future added value";
export type ProjectFilter = {|
  categories?: ?$ReadOnlyArray<?string>,
  name?: ?string,
  published?: ?boolean,
|};
export type HomeScreenQueryVariables = {|
  hotCategoryCount: number,
  hotCategoryOrder?: ?RankOrder,
  newProjectCount: number,
  projectsFilter?: ?ProjectFilter,
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
  $projectsFilter: ProjectFilter
) {
  ...HomeScreen_query
}

fragment HomeScreen_query on RootQueryType {
  ...ProjectThumbnailsTable_query
  ...CategoriesTable_query
}

fragment ProjectThumbnailsTable_query on RootQueryType {
  projects: allProjects(first: $newProjectCount, filter: $projectsFilter) {
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
  author {
    name
    id
  }
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
  },
  {
    "kind": "LocalArgument",
    "name": "projectsFilter",
    "type": "ProjectFilter",
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
};
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
            "name": "filter",
            "variableName": "projectsFilter",
            "type": "ProjectFilter"
          },
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
                    "name": "author",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v1/*: any*/)
                    ]
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
    "text": "query HomeScreenQuery(\n  $hotCategoryCount: Int!\n  $hotCategoryOrder: RankOrder\n  $newProjectCount: Int!\n  $projectsFilter: ProjectFilter\n) {\n  ...HomeScreen_query\n}\n\nfragment HomeScreen_query on RootQueryType {\n  ...ProjectThumbnailsTable_query\n  ...CategoriesTable_query\n}\n\nfragment ProjectThumbnailsTable_query on RootQueryType {\n  projects: allProjects(first: $newProjectCount, filter: $projectsFilter) {\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n      }\n    }\n  }\n}\n\nfragment CategoriesTable_query on RootQueryType {\n  categories: allProjectCategories(first: $hotCategoryCount, order: $hotCategoryOrder) {\n    edges {\n      node {\n        id\n        name\n        image\n      }\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  author {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a7bb82270a56e68703cc8d497a842c52';
module.exports = node;
