/**
 * @flow
 * @relayHash 70aec7278619d223c4162b2a3be5dfa4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostDetailScreen_query$ref = any;
export type PostDetailScreenQueryVariables = {|
  postId: string
|};
export type PostDetailScreenQueryResponse = {|
  +$fragmentRefs: PostDetailScreen_query$ref
|};
export type PostDetailScreenQuery = {|
  variables: PostDetailScreenQueryVariables,
  response: PostDetailScreenQueryResponse,
|};
*/


/*
query PostDetailScreenQuery(
  $postId: ID!
) {
  ...PostDetailScreen_query
}

fragment PostDetailScreen_query on RootQueryType {
  post(id: $postId) {
    ...PostSection_post
    author {
      name
    }
    id
  }
}

fragment PostSection_post on Post {
  id
  author {
    name
    image
  }
  insertedAt
  message
  thumbnail {
    image
    id
  }
  relatedProjectType
  relatedProjectName
  relatedProject {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "postId",
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PostDetailScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PostDetailScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PostDetailScreenQuery",
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
            "variableName": "postId",
            "type": "ID!"
          }
        ],
        "concreteType": "Post",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "insertedAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "message",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "thumbnail",
            "storageKey": null,
            "args": null,
            "concreteType": "PostPhoto",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v1/*: any*/)
            ]
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
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PostDetailScreenQuery",
    "id": null,
    "text": "query PostDetailScreenQuery(\n  $postId: ID!\n) {\n  ...PostDetailScreen_query\n}\n\nfragment PostDetailScreen_query on RootQueryType {\n  post(id: $postId) {\n    ...PostSection_post\n    author {\n      name\n    }\n    id\n  }\n}\n\nfragment PostSection_post on Post {\n  id\n  author {\n    name\n    image\n  }\n  insertedAt\n  message\n  thumbnail {\n    image\n    id\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df8a10eb9c463496f3945413a7139388';
module.exports = node;
