/**
 * @flow
 * @relayHash 0a6d26bb60c1398c96f2847cb8a7fd1e
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
  projects(first: $count) {
    ...UserProjectsScene_projects
  }
  posts(first: $count) {
    ...UserPostsScene_posts
  }
  favoriteProjects(first: $count) {
    ...UserFavoritesScene_projects
  }
}

fragment UserProjectsScene_projects on ProjectConnection {
  edges {
    node {
      id
      name
      image
      published
    }
  }
}

fragment UserPostsScene_posts on PostConnection {
  edges {
    node {
      id
      thumbnail {
        image
        id
      }
      message
      insertedAt
    }
  }
}

fragment UserFavoritesScene_projects on ProjectConnection {
  edges {
    node {
      id
      image
      name
      author {
        name
        id
      }
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
                      }
                    ]
                  }
                ]
              }
            ]
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
                      }
                    ]
                  }
                ]
              }
            ]
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
                      }
                    ]
                  }
                ]
              }
            ]
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
    "text": "query UserScreenQuery(\n  $id: ID!\n  $count: Int!\n) {\n  ...UserScreen_query\n}\n\nfragment UserScreen_query on RootQueryType {\n  user(id: $id) {\n    ...ProfileSection_profile\n    ...ProfileTabMenu_profile\n    following\n    id\n  }\n}\n\nfragment ProfileSection_profile on Profile {\n  name\n  image\n  followingCount\n  followerCount\n}\n\nfragment ProfileTabMenu_profile on Profile {\n  projects(first: $count) {\n    ...UserProjectsScene_projects\n  }\n  posts(first: $count) {\n    ...UserPostsScene_posts\n  }\n  favoriteProjects(first: $count) {\n    ...UserFavoritesScene_projects\n  }\n}\n\nfragment UserProjectsScene_projects on ProjectConnection {\n  edges {\n    node {\n      id\n      name\n      image\n      published\n    }\n  }\n}\n\nfragment UserPostsScene_posts on PostConnection {\n  edges {\n    node {\n      id\n      thumbnail {\n        image\n        id\n      }\n      message\n      insertedAt\n    }\n  }\n}\n\nfragment UserFavoritesScene_projects on ProjectConnection {\n  edges {\n    node {\n      id\n      image\n      name\n      author {\n        name\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17663418b6ca9228d98b69245e2c11a6';
module.exports = node;
