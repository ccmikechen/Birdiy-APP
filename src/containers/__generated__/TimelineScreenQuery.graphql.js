/**
 * @flow
 * @relayHash d6bce69cbfc6747ef1300dcce5a82402
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TimelineScreen_query$ref = any;
export type TimelineScreenQueryVariables = {||};
export type TimelineScreenQueryResponse = {|
  +$fragmentRefs: TimelineScreen_query$ref
|};
export type TimelineScreenQuery = {|
  variables: TimelineScreenQueryVariables,
  response: TimelineScreenQueryResponse,
|};
*/


/*
query TimelineScreenQuery {
  ...TimelineScreen_query
}

fragment TimelineScreen_query on RootQueryType {
  all: posts {
    ...PostSection_post
  }
  following: posts {
    ...PostSection_post
  }
}

fragment PostSection_post on Post {
  author {
    name
    image
  }
  insertedAt
  message
  thumbnail {
    image
  }
  relatedProjectType
  relatedProjectName
  relatedProject {
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "author",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/)
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
      (v0/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TimelineScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "TimelineScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TimelineScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "all",
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": true,
        "selections": (v2/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": "following",
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": true,
        "selections": (v2/*: any*/)
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TimelineScreenQuery",
    "id": null,
    "text": "query TimelineScreenQuery {\n  ...TimelineScreen_query\n}\n\nfragment TimelineScreen_query on RootQueryType {\n  all: posts {\n    ...PostSection_post\n  }\n  following: posts {\n    ...PostSection_post\n  }\n}\n\nfragment PostSection_post on Post {\n  author {\n    name\n    image\n  }\n  insertedAt\n  message\n  thumbnail {\n    image\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '97ce85cdff92a6dd3392b7c845413276';
module.exports = node;
