/**
 * @flow
 * @relayHash 3ad39ebea2f712cc1fac61e6286df1f2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProfileSettingScreen_query$ref = any;
export type ProfileSettingScreenQueryVariables = {||};
export type ProfileSettingScreenQueryResponse = {|
  +$fragmentRefs: ProfileSettingScreen_query$ref
|};
export type ProfileSettingScreenQuery = {|
  variables: ProfileSettingScreenQueryVariables,
  response: ProfileSettingScreenQueryResponse,
|};
*/


/*
query ProfileSettingScreenQuery {
  ...ProfileSettingScreen_query
}

fragment ProfileSettingScreen_query on RootQueryType {
  viewer {
    id
    name
    image
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProfileSettingScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProfileSettingScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileSettingScreenQuery",
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
  },
  "params": {
    "operationKind": "query",
    "name": "ProfileSettingScreenQuery",
    "id": null,
    "text": "query ProfileSettingScreenQuery {\n  ...ProfileSettingScreen_query\n}\n\nfragment ProfileSettingScreen_query on RootQueryType {\n  viewer {\n    id\n    name\n    image\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '8135307c49ad65e3324d9a1a04c635e5';
module.exports = node;
