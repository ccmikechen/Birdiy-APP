/**
 * @flow
 * @relayHash 7f1d140e7ac34dd15653ad5a080be139
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TimelineScreen_query$ref = any;
export type TimelineScreenQueryVariables = {|
  count: number,
  allCursor?: ?string,
  followingCursor?: ?string,
|};
export type TimelineScreenQueryResponse = {|
  +$fragmentRefs: TimelineScreen_query$ref
|};
export type TimelineScreenQuery = {|
  variables: TimelineScreenQueryVariables,
  response: TimelineScreenQueryResponse,
|};
*/


/*
query TimelineScreenQuery(
  $count: Int!
  $allCursor: String
  $followingCursor: String
) {
  ...TimelineScreen_query
}

fragment TimelineScreen_query on RootQueryType {
  ...AllActivityList_query
  ...FollowingActivityList_query
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
        insertedAt
        id
        __typename
      }
      cursor
    }
  }
}

fragment FollowingActivityList_query on RootQueryType {
  viewer {
    following: followingUserActivities(first: $count, after: $followingCursor) {
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
          insertedAt
          id
          __typename
        }
        cursor
      }
    }
    id
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
  },
  {
    "kind": "LocalArgument",
    "name": "followingCursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count",
  "type": "Int"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "allCursor",
    "type": "String"
  },
  (v1/*: any*/)
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "author",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/),
    (v5/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "following",
      "args": null,
      "storageKey": null
    }
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "insertedAt",
  "args": null,
  "storageKey": null
},
v8 = [
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
              (v3/*: any*/),
              (v6/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "category",
                "storageKey": null,
                "args": null,
                "concreteType": "ProjectCategory",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v3/*: any*/)
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
              (v3/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
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
                  (v5/*: any*/),
                  (v3/*: any*/)
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
                  (v3/*: any*/),
                  (v4/*: any*/)
                ]
              }
            ]
          },
          (v7/*: any*/),
          (v3/*: any*/),
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
],
v9 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "followingCursor",
    "type": "String"
  },
  (v1/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TimelineScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "all",
        "name": "allActivities",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "ActivityConnection",
        "plural": false,
        "selections": (v8/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "all",
        "name": "allActivities",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "AllActivityList_all",
        "filters": null
      },
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
            "kind": "LinkedField",
            "alias": "following",
            "name": "followingUserActivities",
            "storageKey": null,
            "args": (v9/*: any*/),
            "concreteType": "ActivityConnection",
            "plural": false,
            "selections": (v8/*: any*/)
          },
          {
            "kind": "LinkedHandle",
            "alias": "following",
            "name": "followingUserActivities",
            "args": (v9/*: any*/),
            "handle": "connection",
            "key": "FollowingActivityList_following",
            "filters": null
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TimelineScreenQuery",
    "id": null,
    "text": "query TimelineScreenQuery(\n  $count: Int!\n  $allCursor: String\n  $followingCursor: String\n) {\n  ...TimelineScreen_query\n}\n\nfragment TimelineScreen_query on RootQueryType {\n  ...AllActivityList_query\n  ...FollowingActivityList_query\n}\n\nfragment AllActivityList_query on RootQueryType {\n  all: allActivities(first: $count, after: $allCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        project {\n          ...ProjectActivitySection_project\n          id\n        }\n        post {\n          ...PostSection_post\n          id\n        }\n        insertedAt\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment FollowingActivityList_query on RootQueryType {\n  viewer {\n    following: followingUserActivities(first: $count, after: $followingCursor) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          project {\n            ...ProjectActivitySection_project\n            id\n          }\n          post {\n            ...PostSection_post\n            id\n          }\n          insertedAt\n          id\n          __typename\n        }\n        cursor\n      }\n    }\n    id\n  }\n}\n\nfragment ProjectActivitySection_project on Project {\n  id\n  author {\n    id\n    name\n    image\n    following\n  }\n  image\n  name\n  category {\n    name\n    id\n  }\n}\n\nfragment PostSection_post on Post {\n  id\n  author {\n    id\n    name\n    image\n    following\n  }\n  insertedAt\n  message\n  photosCount\n  thumbnail {\n    image\n    id\n  }\n  relatedProjectType\n  relatedProjectName\n  relatedProject {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8740b4c56c2bb496fd494b9000bb1a4b';
module.exports = node;
