/**
 * @flow
 * @relayHash bd827e14ad9a75edc7018d207f9f32c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AllActivityList_query$ref = any;
export type AllActivityListPaginationQueryVariables = {|
  count: number,
  allCursor?: ?string,
|};
export type AllActivityListPaginationQueryResponse = {|
  +$fragmentRefs: AllActivityList_query$ref
|};
export type AllActivityListPaginationQuery = {|
  variables: AllActivityListPaginationQueryVariables,
  response: AllActivityListPaginationQueryResponse,
|};
*/


/*
query AllActivityListPaginationQuery(
  $count: Int!
  $allCursor: String
) {
  ...AllActivityList_query
}

fragment AllActivityList_query on RootQueryType {
  all: allActivities(first: $count, after: $allCursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        project {
          ...ProjectActivitySection_project
          id
        }
        post {
          ...PostSection_post
          id
        }
        id
        __typename
      }
      cursor
    }
  }
}

fragment ProjectActivitySection_project on Project {
  id
  author {
    id
    name
    image
    following
  }
  publishedAt
  image
  name
  category {
    name
    id
  }
}

fragment PostSection_post on Post {
  id
  author {
    id
    name
    image
    following
  }
  insertedAt
  message
  photosCount
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
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "allCursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "allCursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "author",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    (v4/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "following",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AllActivityListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AllActivityList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AllActivityListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "all",
        "name": "allActivities",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ActivityConnection",
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
            "concreteType": "ActivityEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Activity",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "project",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Project",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "publishedAt",
                        "args": null,
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      (v3/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "category",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ProjectCategory",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v2/*: any*/)
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "post",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Post",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v5/*: any*/),
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
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "photosCount",
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
                          (v4/*: any*/),
                          (v2/*: any*/)
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
                          (v2/*: any*/),
                          (v3/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v2/*: any*/),
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
        "alias": "all",
        "name": "allActivities",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "AllActivityList_all",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AllActivityListPaginationQuery",
    "id": null,
    "text": "query AllActivityListPaginationQuery(\n  $count: Int!\n  $allCursor: String\n) {\n  ...AllActivityList_query\n}\n\nfragment AllActivityList_query on RootQueryType {\n  all: allActivities(first: $count, after: $allCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        project {\n          ...ProjectActivitySection_project\n          id\n        }\n        post {\n          ...PostSection_post\n          id\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectActivitySection_project on Project {\n  id\n  author {\n    id\n    name\n    image\n    following\n  }\n  publishedAt\n  image\n  name\n  category {\n    name\n    id\n  }\n}\n\nfragment PostSection_post on Post {\n  id\n  author {\n    id\n    name\n    image\n    following\n  }\n  insertedAt\n  message\n  photosCount\n  thumbnail {\n    image\n    id\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fe9a21402138a990b9f9f058da6fc2cb';
module.exports = node;
