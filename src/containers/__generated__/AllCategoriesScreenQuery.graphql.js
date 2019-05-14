/**
 * @flow
 * @relayHash 010ae704e074420682f6e6e7a9eca735
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AllCategoriesScreen_query$ref = any;
export type AllCategoriesScreenQueryVariables = {||};
export type AllCategoriesScreenQueryResponse = {|
  +$fragmentRefs: AllCategoriesScreen_query$ref
|};
export type AllCategoriesScreenQuery = {|
  variables: AllCategoriesScreenQueryVariables,
  response: AllCategoriesScreenQueryResponse,
|};
*/


/*
query AllCategoriesScreenQuery {
  ...AllCategoriesScreen_query
}

fragment AllCategoriesScreen_query on RootQueryType {
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

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AllCategoriesScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AllCategoriesScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AllCategoriesScreenQuery",
    "argumentDefinitions": [],
    "selections": [
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "image",
                    "args": null,
                    "storageKey": null
                  }
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
    "name": "AllCategoriesScreenQuery",
    "id": null,
    "text": "query AllCategoriesScreenQuery {\n  ...AllCategoriesScreen_query\n}\n\nfragment AllCategoriesScreen_query on RootQueryType {\n  categories: allProjectCategories(first: 100000, order: NAME) {\n    edges {\n      node {\n        id\n        name\n        image\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '265bb5f40dae2f3d463e69b912313f04';
module.exports = node;
