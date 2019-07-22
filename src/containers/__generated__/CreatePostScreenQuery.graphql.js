/**
 * @flow
 * @relayHash bac2d554bd8ad44ffa8b524d0ae487b3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreatePostScreen_query$ref = any;
export type CreatePostScreenQueryVariables = {||};
export type CreatePostScreenQueryResponse = {|
  +$fragmentRefs: CreatePostScreen_query$ref
|};
export type CreatePostScreenQuery = {|
  variables: CreatePostScreenQueryVariables,
  response: CreatePostScreenQueryResponse,
|};
*/


/*
query CreatePostScreenQuery {
  ...CreatePostScreen_query
}

fragment CreatePostScreen_query on RootQueryType {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreatePostScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "CreatePostScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePostScreenQuery",
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
    "name": "CreatePostScreenQuery",
    "id": null,
    "text": "query CreatePostScreenQuery {\n  ...CreatePostScreen_query\n}\n\nfragment CreatePostScreen_query on RootQueryType {\n  viewer {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '0d84406a1150cba7ca7dfcfec6e969a4';
module.exports = node;
