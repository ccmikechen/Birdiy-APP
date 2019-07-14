/**
 * @flow
 * @relayHash ac4a14925a1020c2df525ad8501609f7
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
  projectCount: number,
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
  $projectCount: Int!
) {
  ...HomeScreen_query
}

fragment HomeScreen_query on RootQueryType {
  ...CategoriesTable_query
  craftProjects: allProjects(first: $projectCount, filter: {categories: ["Craft"]}) {
    ...ProjectThumbnailsTable_projects
  }
  electronicsProjects: allProjects(first: $projectCount, filter: {categories: ["Circuits"]}) {
    ...ProjectThumbnailsTable_projects
  }
  livingProjects: allProjects(first: $projectCount, filter: {categories: ["Living"]}) {
    ...ProjectThumbnailsTable_projects
  }
  outsideProjects: allProjects(first: $projectCount, filter: {categories: ["Outside"]}) {
    ...ProjectThumbnailsTable_projects
  }
  scienceProjects: allProjects(first: $projectCount, filter: {categories: ["Science"]}) {
    ...ProjectThumbnailsTable_projects
  }
  workshopProjects: allProjects(first: $projectCount, filter: {categories: ["Workshop"]}) {
    ...ProjectThumbnailsTable_projects
  }
}

fragment CategoriesTable_query on RootQueryType {
  categories: allProjectCategories(first: $hotCategoryCount, order: $hotCategoryOrder) {
    edges {
      node {
        id
        name
      }
    }
  }
}

fragment ProjectThumbnailsTable_projects on ProjectConnection {
  edges {
    node {
      ...ProjectSection_project
      id
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
    "name": "projectCount",
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
  "kind": "Variable",
  "name": "first",
  "variableName": "projectCount",
  "type": "Int"
},
v4 = [
  (v2/*: any*/),
  (v1/*: any*/)
],
v5 = [
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
          }
        ]
      }
    ]
  }
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
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "craftProjects",
        "name": "allProjects",
        "storageKey": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "categories": [
                "Craft"
              ]
            },
            "type": "ProjectFilter"
          },
          (v3/*: any*/)
        ],
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v5/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": "electronicsProjects",
        "name": "allProjects",
        "storageKey": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "categories": [
                "Circuits"
              ]
            },
            "type": "ProjectFilter"
          },
          (v3/*: any*/)
        ],
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v5/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": "livingProjects",
        "name": "allProjects",
        "storageKey": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "categories": [
                "Living"
              ]
            },
            "type": "ProjectFilter"
          },
          (v3/*: any*/)
        ],
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v5/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": "outsideProjects",
        "name": "allProjects",
        "storageKey": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "categories": [
                "Outside"
              ]
            },
            "type": "ProjectFilter"
          },
          (v3/*: any*/)
        ],
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v5/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": "scienceProjects",
        "name": "allProjects",
        "storageKey": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "categories": [
                "Science"
              ]
            },
            "type": "ProjectFilter"
          },
          (v3/*: any*/)
        ],
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v5/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": "workshopProjects",
        "name": "allProjects",
        "storageKey": null,
        "args": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "categories": [
                "Workshop"
              ]
            },
            "type": "ProjectFilter"
          },
          (v3/*: any*/)
        ],
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": (v5/*: any*/)
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeScreenQuery",
    "id": null,
    "text": "query HomeScreenQuery(\n  $hotCategoryCount: Int!\n  $hotCategoryOrder: RankOrder\n  $projectCount: Int!\n) {\n  ...HomeScreen_query\n}\n\nfragment HomeScreen_query on RootQueryType {\n  ...CategoriesTable_query\n  craftProjects: allProjects(first: $projectCount, filter: {categories: [\"Craft\"]}) {\n    ...ProjectThumbnailsTable_projects\n  }\n  electronicsProjects: allProjects(first: $projectCount, filter: {categories: [\"Circuits\"]}) {\n    ...ProjectThumbnailsTable_projects\n  }\n  livingProjects: allProjects(first: $projectCount, filter: {categories: [\"Living\"]}) {\n    ...ProjectThumbnailsTable_projects\n  }\n  outsideProjects: allProjects(first: $projectCount, filter: {categories: [\"Outside\"]}) {\n    ...ProjectThumbnailsTable_projects\n  }\n  scienceProjects: allProjects(first: $projectCount, filter: {categories: [\"Science\"]}) {\n    ...ProjectThumbnailsTable_projects\n  }\n  workshopProjects: allProjects(first: $projectCount, filter: {categories: [\"Workshop\"]}) {\n    ...ProjectThumbnailsTable_projects\n  }\n}\n\nfragment CategoriesTable_query on RootQueryType {\n  categories: allProjectCategories(first: $hotCategoryCount, order: $hotCategoryOrder) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment ProjectThumbnailsTable_projects on ProjectConnection {\n  edges {\n    node {\n      ...ProjectSection_project\n      id\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  topic {\n    name\n    id\n  }\n  author {\n    name\n    id\n  }\n  published\n  viewCount\n  likeCount\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a526d285e5d7129a2141024ed91b249';
module.exports = node;
