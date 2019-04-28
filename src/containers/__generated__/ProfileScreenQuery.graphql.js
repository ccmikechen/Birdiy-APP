/**
 * @flow
 * @relayHash 319559469ab975c104273356d12c7e37
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProfileScreen_query$ref = any;
export type ProfileScreenQueryVariables = {|
  count: number
|};
export type ProfileScreenQueryResponse = {|
  +$fragmentRefs: ProfileScreen_query$ref
|};
export type ProfileScreenQuery = {|
  variables: ProfileScreenQueryVariables,
  response: ProfileScreenQueryResponse,
|};
*/


/*
query ProfileScreenQuery(
  $count: Int!
) {
  ...ProfileScreen_query
}

fragment ProfileScreen_query on RootQueryType {
  viewer {
    ...ProfileSection_profile
    ...ProfileTabMenu_profile
  }
}

fragment ProfileSection_profile on User {
  name
  image
  followingCount
  followerCount
}

fragment ProfileTabMenu_profile on User {
  projects(first: $count) {
    ...MyProjectsScene_projects
  }
  posts(first: $count) {
    ...MyPostsScene_posts
  }
  favoriteProjects(first: $count) {
    ...MyFavoritesScene_projects
  }
}

fragment MyProjectsScene_projects on ProjectConnection {
  edges {
    node {
      id
      name
      image
      published
    }
  }
}

fragment MyPostsScene_posts on PostConnection {
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

fragment MyFavoritesScene_projects on ProjectConnection {
  edges {
    node {
      id
      image
      name
      author {
        name
      }
    }
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
    "name": "ProfileScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProfileScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProfileScreenQuery",
    "id": null,
    "text": "query ProfileScreenQuery(\n  $count: Int!\n) {\n  ...ProfileScreen_query\n}\n\nfragment ProfileScreen_query on RootQueryType {\n  viewer {\n    ...ProfileSection_profile\n    ...ProfileTabMenu_profile\n  }\n}\n\nfragment ProfileSection_profile on User {\n  name\n  image\n  followingCount\n  followerCount\n}\n\nfragment ProfileTabMenu_profile on User {\n  projects(first: $count) {\n    ...MyProjectsScene_projects\n  }\n  posts(first: $count) {\n    ...MyPostsScene_posts\n  }\n  favoriteProjects(first: $count) {\n    ...MyFavoritesScene_projects\n  }\n}\n\nfragment MyProjectsScene_projects on ProjectConnection {\n  edges {\n    node {\n      id\n      name\n      image\n      published\n    }\n  }\n}\n\nfragment MyPostsScene_posts on PostConnection {\n  edges {\n    node {\n      id\n      thumbnail {\n        image\n        id\n      }\n      message\n      insertedAt\n    }\n  }\n}\n\nfragment MyFavoritesScene_projects on ProjectConnection {\n  edges {\n    node {\n      id\n      image\n      name\n      author {\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fda4de658a5e695eb8a3d11cfddb7537';
module.exports = node;
