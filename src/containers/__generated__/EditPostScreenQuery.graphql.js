/**
 * @flow
 * @relayHash 04a9e643fbaa69d706b85b4f1f6c4e2a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditPostScreen_query$ref = any;
export type EditPostScreenQueryVariables = {|
  id: string
|};
export type EditPostScreenQueryResponse = {|
  +$fragmentRefs: EditPostScreen_query$ref
|};
export type EditPostScreenQuery = {|
  variables: EditPostScreenQueryVariables,
  response: EditPostScreenQueryResponse,
|};
*/


/*
query EditPostScreenQuery(
  $id: ID!
) {
  ...EditPostScreen_query
}

fragment EditPostScreen_query on RootQueryType {
  post(id: $id) {
    id
    message
    relatedProjectType
    relatedProjectName
    relatedProject {
      id
      name
    }
    photos {
      id
      image
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditPostScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "EditPostScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditPostScreenQuery",
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
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "message",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "relatedProjectType",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "relatedProjectName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "relatedProject",
            "storageKey": null,
            "args": null,
            "concreteType": "Project",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "photos",
            "storageKey": null,
            "args": null,
            "concreteType": "PostPhoto",
            "plural": true,
            "selections": [
              (v1/*: any*/),
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
  },
  "params": {
    "operationKind": "query",
    "name": "EditPostScreenQuery",
    "id": null,
    "text": "query EditPostScreenQuery(\n  $id: ID!\n) {\n  ...EditPostScreen_query\n}\n\nfragment EditPostScreen_query on RootQueryType {\n  post(id: $id) {\n    id\n    message\n    relatedProjectType\n    relatedProjectName\n    relatedProject {\n      id\n      name\n    }\n    photos {\n      id\n      image\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd59650847435d8c6da4bbf94976fd6c';
module.exports = node;
