/**
 * @flow
 * @relayHash 172f8bbf820d383c3026e65ec7001a62
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostImagesScreen_query$ref = any;
export type PostImagesScreenQueryVariables = {|
  id: string
|};
export type PostImagesScreenQueryResponse = {|
  +$fragmentRefs: PostImagesScreen_query$ref
|};
export type PostImagesScreenQuery = {|
  variables: PostImagesScreenQueryVariables,
  response: PostImagesScreenQueryResponse,
|};
*/


/*
query PostImagesScreenQuery(
  $id: ID!
) {
  ...PostImagesScreen_query
}

fragment PostImagesScreen_query on RootQueryType {
  post(id: $id) {
    ...PostImageSlider_post
    id
  }
}

fragment PostImageSlider_post on Post {
  photos {
    image
    id
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PostImagesScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PostImagesScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PostImagesScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "post",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Post",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "photos",
            "storageKey": null,
            "args": null,
            "concreteType": "PostPhoto",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "image",
                "args": null,
                "storageKey": null
              },
              (v1/*: any*/)
            ]
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PostImagesScreenQuery",
    "id": null,
    "text": "query PostImagesScreenQuery(\n  $id: ID!\n) {\n  ...PostImagesScreen_query\n}\n\nfragment PostImagesScreen_query on RootQueryType {\n  post(id: $id) {\n    ...PostImageSlider_post\n    id\n  }\n}\n\nfragment PostImageSlider_post on Post {\n  photos {\n    image\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7a3a20f7c931ab1096898ed4b572738b';
module.exports = node;
