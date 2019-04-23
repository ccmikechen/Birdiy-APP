/**
 * @flow
 * @relayHash 27c7402cff8872b6a8144b5e81ebab08
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditProjectScreen_query$ref = any;
export type EditProjectScreenQueryVariables = {|
  id: string
|};
export type EditProjectScreenQueryResponse = {|
  +$fragmentRefs: EditProjectScreen_query$ref
|};
export type EditProjectScreenQuery = {|
  variables: EditProjectScreenQueryVariables,
  response: EditProjectScreenQueryResponse,
|};
*/


/*
query EditProjectScreenQuery(
  $id: ID!
) {
  ...EditProjectScreen_query
}

fragment EditProjectScreen_query on RootQueryType {
  project(id: $id) {
    name
    image
    category {
      name
      id
    }
    introduction
    tip
    materials {
      id
      name
      amountUnit
      url
    }
    fileResources {
      id
      name
      url
    }
    methods {
      id
      image
      title
      content
    }
    id
  }
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
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
  "name": "url",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditProjectScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "EditProjectScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditProjectScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Project",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectCategory",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v3/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "introduction",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "tip",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "materials",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectMaterial",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "amountUnit",
                "args": null,
                "storageKey": null
              },
              (v4/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fileResources",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectFileResource",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v1/*: any*/),
              (v4/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "methods",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectMethod",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "content",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v3/*: any*/)
        ]
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
                  (v1/*: any*/),
                  (v2/*: any*/)
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
    "name": "EditProjectScreenQuery",
    "id": null,
    "text": "query EditProjectScreenQuery(\n  $id: ID!\n) {\n  ...EditProjectScreen_query\n}\n\nfragment EditProjectScreen_query on RootQueryType {\n  project(id: $id) {\n    name\n    image\n    category {\n      name\n      id\n    }\n    introduction\n    tip\n    materials {\n      id\n      name\n      amountUnit\n      url\n    }\n    fileResources {\n      id\n      name\n      url\n    }\n    methods {\n      id\n      image\n      title\n      content\n    }\n    id\n  }\n  categories: allProjectCategories(first: 100000, order: NAME) {\n    edges {\n      node {\n        id\n        name\n        image\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b799c98a96ed8e029000c258ffb620d';
module.exports = node;
