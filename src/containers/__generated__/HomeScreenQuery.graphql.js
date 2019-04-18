/**
 * @flow
 * @relayHash 49ddbe0e46738b840e254e52c80ffa40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeScreen_query$ref = any;
export type HomeScreenQueryVariables = {|
  newProjectCount: number
|};
export type HomeScreenQueryResponse = {|
  +$fragmentRefs: HomeScreen_query$ref
|};
export type HomeScreenQuery = {|
  variables: HomeScreenQueryVariables,
  response: HomeScreenQueryResponse,
|};
*/


/*
query HomeScreenQuery(
  $newProjectCount: Int!
) {
  ...HomeScreen_query
}

fragment HomeScreen_query on RootQueryType {
  ...ProjectThumbnailsTable_query
}

fragment ProjectThumbnailsTable_query on RootQueryType {
  projects: allProjects(first: $newProjectCount) {
    edges {
      node {
        ...ProjectSection_project
        id
      }
    }
  }
}

fragment ProjectSection_project on Project {
  id
  name
  image
  author {
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "newProjectCount",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "HomeScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "projects",
        "name": "allProjects",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "newProjectCount",
            "type": "Int"
          }
        ],
        "concreteType": "ProjectConnection",
        "plural": false,
        "selections": [
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  (v1/*: any*/),
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
                    "name": "author",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeScreenQuery",
    "id": null,
    "text": "query HomeScreenQuery(\n  $newProjectCount: Int!\n) {\n  ...HomeScreen_query\n}\n\nfragment HomeScreen_query on RootQueryType {\n  ...ProjectThumbnailsTable_query\n}\n\nfragment ProjectThumbnailsTable_query on RootQueryType {\n  projects: allProjects(first: $newProjectCount) {\n    edges {\n      node {\n        ...ProjectSection_project\n        id\n      }\n    }\n  }\n}\n\nfragment ProjectSection_project on Project {\n  id\n  name\n  image\n  author {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e82f3ca152e5fe69291dfe1333ab1e5';
module.exports = node;
