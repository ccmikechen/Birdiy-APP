/**
 * @flow
 * @relayHash 24a776682252fe4d19a47b8007e5b322
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MyProjectsScreen_query$ref = any;
export type MyProjectsScreenQueryVariables = {|
  count: number,
  cursor?: ?string,
|};
export type MyProjectsScreenQueryResponse = {|
  +$fragmentRefs: MyProjectsScreen_query$ref
|};
export type MyProjectsScreenQuery = {|
  variables: MyProjectsScreenQueryVariables,
  response: MyProjectsScreenQueryResponse,
|};
*/


/*
query MyProjectsScreenQuery(
  $count: Int!
  $cursor: String
) {
  ...MyProjectsScreen_query
}

fragment MyProjectsScreen_query on RootQueryType {
  viewer {
    id
  }
  ...MyProjectList_query
}

fragment MyProjectList_query on RootQueryType {
  viewer {
    projects(first: $count, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...ProjectSection_project
          id
          __typename
        }
        cursor
      }
    }
    id
  }
}

fragment ProjectSection_project on Project {
  id
  name
  image
  topic {
    name
    id
  }
  author {
    name
    id
  }
  published
  viewCount
  likeCount
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
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
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  (v1/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MyProjectsScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "MyProjectsScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MyProjectsScreenQuery",
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
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "projects",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "ProjectConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ProjectEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Project",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v3/*: any*/),
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
                        "name": "topic",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ProjectTopic",
                        "plural": false,
                        "selections": (v4/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "author",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": (v4/*: any*/)
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "published",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "viewCount",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "likeCount",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "projects",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "MyProjectList_projects",
            "filters": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MyProjectsScreenQuery",
    "id": null,
    "text": "query MyProjectsScreenQuery(\n  $count: Int!\n  $cursor: String\n) {\n  ...MyProjectsScreen_query\n}\n\nfragment MyProjectsScreen_query on RootQueryType {\n  viewer {\n    id\n  }\n  ...MyProjectList_query\n}\n\nfragment MyProjectList_query on RootQueryType {\n  viewer {\n    projects(first: $count, after: $cursor) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...ProjectSection_project\n          id\n          __typename\n        }\n        cursor\n      }\n    }\n    id\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  topic {\n    name\n    id\n  }\n  author {\n    name\n    id\n  }\n  published\n  viewCount\n  likeCount\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9950d88b8ae4a80ceb8ccf4d9114c02d';
module.exports = node;
