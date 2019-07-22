/**
 * @flow
 * @relayHash 40bbe129eb7026a6bd240134856f2052
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserScreen_query$ref = any;
export type UserScreenQueryVariables = {|
  id: string,
  count: number,
|};
export type UserScreenQueryResponse = {|
  +$fragmentRefs: UserScreen_query$ref
|};
export type UserScreenQuery = {|
  variables: UserScreenQueryVariables,
  response: UserScreenQueryResponse,
|};
*/


/*
query UserScreenQuery(
  $id: ID!
  $count: Int!
) {
  ...UserScreen_query
}

fragment UserScreen_query on RootQueryType {
  user(id: $id) {
    ...ProfileSection_profile
    ...ProfileTabMenu_profile
    following
    id
  }
}

fragment ProfileSection_profile on Profile {
  name
  image
  followingCount
  followerCount
}

fragment ProfileTabMenu_profile on Profile {
  ...UserProjectsScene_profile
  ...UserPostsScene_profile
  ...UserFavoritesScene_profile
}

fragment UserProjectsScene_profile on Profile {
  projects(first: $count) {
    edges {
      node {
        id
        name
        image
        published
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment UserPostsScene_profile on Profile {
  posts(first: $count) {
    edges {
      node {
        id
        thumbnail {
          image
          id
        }
        message
        insertedAt
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment UserFavoritesScene_profile on Profile {
  favoriteProjects(first: $count) {
    edges {
      node {
        id
        image
        name
        author {
          name
          id
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
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
  },
  {
    "kind": "LocalArgument",
    "name": "count",
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
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v7 = {
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
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "UserScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "followingCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "followerCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "projects",
            "storageKey": null,
            "args": (v3/*: any*/),
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
                      (v4/*: any*/),
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "published",
                        "args": null,
                        "storageKey": null
                      },
                      (v5/*: any*/)
                    ]
                  },
                  (v6/*: any*/)
                ]
              },
              (v7/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "projects",
            "args": (v3/*: any*/),
            "handle": "connection",
            "key": "UserProjectsScene_projects",
            "filters": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "posts",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "PostConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "PostEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Post",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "thumbnail",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PostPhoto",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v4/*: any*/)
                        ]
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
                        "name": "insertedAt",
                        "args": null,
                        "storageKey": null
                      },
                      (v5/*: any*/)
                    ]
                  },
                  (v6/*: any*/)
                ]
              },
              (v7/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "posts",
            "args": (v3/*: any*/),
            "handle": "connection",
            "key": "UserPostsScene_posts",
            "filters": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "favoriteProjects",
            "storageKey": null,
            "args": (v3/*: any*/),
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
                      (v4/*: any*/),
                      (v2/*: any*/),
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
                          (v1/*: any*/),
                          (v4/*: any*/)
                        ]
                      },
                      (v5/*: any*/)
                    ]
                  },
                  (v6/*: any*/)
                ]
              },
              (v7/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "favoriteProjects",
            "args": (v3/*: any*/),
            "handle": "connection",
            "key": "UserProjectsScene_favoriteProjects",
            "filters": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "following",
            "args": null,
            "storageKey": null
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserScreenQuery",
    "id": null,
    "text": "query UserScreenQuery(\n  $id: ID!\n  $count: Int!\n) {\n  ...UserScreen_query\n}\n\nfragment UserScreen_query on RootQueryType {\n  user(id: $id) {\n    ...ProfileSection_profile\n    ...ProfileTabMenu_profile\n    following\n    id\n  }\n}\n\nfragment ProfileSection_profile on Profile {\n  name\n  image\n  followingCount\n  followerCount\n}\n\nfragment ProfileTabMenu_profile on Profile {\n  ...UserProjectsScene_profile\n  ...UserPostsScene_profile\n  ...UserFavoritesScene_profile\n}\n\nfragment UserProjectsScene_profile on Profile {\n  projects(first: $count) {\n    edges {\n      node {\n        id\n        name\n        image\n        published\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment UserPostsScene_profile on Profile {\n  posts(first: $count) {\n    edges {\n      node {\n        id\n        thumbnail {\n          image\n          id\n        }\n        message\n        insertedAt\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment UserFavoritesScene_profile on Profile {\n  favoriteProjects(first: $count) {\n    edges {\n      node {\n        id\n        image\n        name\n        author {\n          name\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17663418b6ca9228d98b69245e2c11a6';
module.exports = node;
