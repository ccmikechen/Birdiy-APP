/**
 * @flow
 * @relayHash 218ba60118d2e8f1c15985ce4b7a3f63
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SelectTopicScreen_query$ref = any;
export type SelectTopicScreenQueryVariables = {||};
export type SelectTopicScreenQueryResponse = {|
  +$fragmentRefs: SelectTopicScreen_query$ref
|};
export type SelectTopicScreenQuery = {|
  variables: SelectTopicScreenQueryVariables,
  response: SelectTopicScreenQueryResponse,
|};
*/


/*
query SelectTopicScreenQuery {
  ...SelectTopicScreen_query
}

fragment SelectTopicScreen_query on RootQueryType {
  categories: allProjectCategories(first: 100000, order: NAME) {
    edges {
      node {
        id
        name
        image
        topics(first: 100000, order: NAME) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SelectTopicScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SelectTopicScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SelectTopicScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "categories",
        "name": "allProjectCategories",
        "storageKey": "allProjectCategories(first:100000,order:\"NAME\")",
        "args": (v0/*: any*/),
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
                    "name": "topics",
                    "storageKey": "topics(first:100000,order:\"NAME\")",
                    "args": (v0/*: any*/),
                    "concreteType": "ProjectTopicConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ProjectTopicEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ProjectTopic",
                            "plural": false,
                            "selections": [
                              (v1/*: any*/),
                              (v2/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
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
    "name": "SelectTopicScreenQuery",
    "id": null,
    "text": "query SelectTopicScreenQuery {\n  ...SelectTopicScreen_query\n}\n\nfragment SelectTopicScreen_query on RootQueryType {\n  categories: allProjectCategories(first: 100000, order: NAME) {\n    edges {\n      node {\n        id\n        name\n        image\n        topics(first: 100000, order: NAME) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96d1ad06b1bf6ea9538b834d6e6b0698';
module.exports = node;
