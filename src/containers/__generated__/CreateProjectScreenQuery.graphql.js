/**
 * @flow
 * @relayHash 60f1993e39b8298048eb9f4e60967d98
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateProjectScreen_query$ref = any;
export type CreateProjectScreenQueryVariables = {||};
export type CreateProjectScreenQueryResponse = {|
  +$fragmentRefs: CreateProjectScreen_query$ref
|};
export type CreateProjectScreenQuery = {|
  variables: CreateProjectScreenQueryVariables,
  response: CreateProjectScreenQueryResponse,
|};
*/


/*
query CreateProjectScreenQuery {
  ...CreateProjectScreen_query
}

fragment CreateProjectScreen_query on RootQueryType {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateProjectScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "CreateProjectScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateProjectScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CreateProjectScreenQuery",
    "id": null,
    "text": "query CreateProjectScreenQuery {\n  ...CreateProjectScreen_query\n}\n\nfragment CreateProjectScreen_query on RootQueryType {\n  viewer {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'd603556f2d170bf55c72873e30d9ba47';
module.exports = node;
