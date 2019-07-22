/**
 * @flow
 * @relayHash e8d52e331fc58913bda67feb19557bce
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
  viewer {
    id
  }
  project(id: $id) {
    id
    name
    published
    image
    source
    video
    topic {
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
      type
    }
    methods {
      id
      image
      title
      content
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
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
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
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      },
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "topic",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectTopic",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v1/*: any*/)
            ]
          },
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "published",
            "args": null,
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "source",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "video",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
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
              (v1/*: any*/),
              (v2/*: any*/),
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
              (v1/*: any*/),
              (v2/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "type",
                "args": null,
                "storageKey": null
              }
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
              (v1/*: any*/),
              (v3/*: any*/),
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EditProjectScreenQuery",
    "id": null,
    "text": "query EditProjectScreenQuery(\n  $id: ID!\n) {\n  ...EditProjectScreen_query\n}\n\nfragment EditProjectScreen_query on RootQueryType {\n  viewer {\n    id\n  }\n  project(id: $id) {\n    id\n    name\n    published\n    image\n    source\n    video\n    topic {\n      name\n      id\n    }\n    introduction\n    tip\n    materials {\n      id\n      name\n      amountUnit\n      url\n    }\n    fileResources {\n      id\n      name\n      url\n      type\n    }\n    methods {\n      id\n      image\n      title\n      content\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b799c98a96ed8e029000c258ffb620d';
module.exports = node;
