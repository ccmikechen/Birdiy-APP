/**
 * @flow
 * @relayHash 9d90c6c47375066fe0f1817368447afe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DrawerScreen_query$ref = any;
export type DrawerScreenQueryVariables = {||};
export type DrawerScreenQueryResponse = {|
  +$fragmentRefs: DrawerScreen_query$ref
|};
export type DrawerScreenQuery = {|
  variables: DrawerScreenQueryVariables,
  response: DrawerScreenQueryResponse,
|};
*/


/*
query DrawerScreenQuery {
  ...DrawerScreen_query
}

fragment DrawerScreen_query on RootQueryType {
  viewer {
    name
    image
    followingCount
    followerCount
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DrawerScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "DrawerScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DrawerScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "followingCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "followerCount",
            "args": null,
            "storageKey": null
          },
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
    "name": "DrawerScreenQuery",
    "id": null,
    "text": "query DrawerScreenQuery {\n  ...DrawerScreen_query\n}\n\nfragment DrawerScreen_query on RootQueryType {\n  viewer {\n    name\n    image\n    followingCount\n    followerCount\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '427e9d2743589f71a1482673799ff0be';
module.exports = node;
