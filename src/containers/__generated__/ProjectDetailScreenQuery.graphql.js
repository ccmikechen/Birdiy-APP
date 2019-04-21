/**
 * @flow
 * @relayHash 5002e44e16506a38f78f392783f6b8e4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectDetailScreen_query$ref = any;
export type ProjectDetailScreenQueryVariables = {|
  projectId: string,
  relatedPostsCount: number,
  relatedPostsCursor?: ?string,
|};
export type ProjectDetailScreenQueryResponse = {|
  +$fragmentRefs: ProjectDetailScreen_query$ref
|};
export type ProjectDetailScreenQuery = {|
  variables: ProjectDetailScreenQueryVariables,
  response: ProjectDetailScreenQueryResponse,
|};
*/


/*
query ProjectDetailScreenQuery(
  $projectId: ID!
  $relatedPostsCount: Int!
  $relatedPostsCursor: String
) {
  ...ProjectDetailScreen_query
}

fragment ProjectDetailScreen_query on RootQueryType {
  project(id: $projectId) {
    name
    image
    ...ProjectAuthor_project
    category {
      name
      id
    }
    introduction
    viewCount
    favoriteCount
    likeCount
    relatedPostCount
    ...ProjectDetailMaterialList_project
    ...ProjectDetailFileList_project
    ...ProjectDetailMethodList_project
    tip
    ...ProjectDetailFollowPostList_project
    id
  }
}

fragment ProjectAuthor_project on Project {
  author {
    name
    image
    followerCount
    projectCount
  }
}

fragment ProjectDetailMaterialList_project on Project {
  materials {
    name
    amountUnit
    url
  }
}

fragment ProjectDetailFileList_project on Project {
  fileResources {
    name
    url
  }
}

fragment ProjectDetailMethodList_project on Project {
  methods {
    image
    title
    content
  }
}

fragment ProjectDetailFollowPostList_project on Project {
  relatedPosts(first: $relatedPostsCount, after: $relatedPostsCursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        thumbnail {
          image
        }
        author {
          image
          name
        }
        __typename
      }
      cursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "projectId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "relatedPostsCount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "relatedPostsCursor",
    "type": "String",
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
  "name": "url",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "relatedPostsCursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "relatedPostsCount",
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProjectDetailScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProjectDetailScreen_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProjectDetailScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "projectId",
            "type": "ID!"
          }
        ],
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "likeCount",
            "args": null,
            "storageKey": null
          },
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
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "followerCount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "projectCount",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectCategory",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v3/*: any*/)
            ]
          },
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
            "name": "viewCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "favoriteCount",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "relatedPostCount",
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
              (v4/*: any*/)
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
              (v2/*: any*/),
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
            "name": "relatedPosts",
            "storageKey": null,
            "args": (v5/*: any*/),
            "concreteType": "PostConnection",
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
                      (v3/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "thumbnail",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PostPhoto",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/)
                        ]
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
                          (v2/*: any*/),
                          (v1/*: any*/)
                        ]
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
            "name": "relatedPosts",
            "args": (v5/*: any*/),
            "handle": "connection",
            "key": "ProjectDetailFollowPostList_relatedPosts",
            "filters": null
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectDetailScreenQuery",
    "id": null,
    "text": "query ProjectDetailScreenQuery(\n  $projectId: ID!\n  $relatedPostsCount: Int!\n  $relatedPostsCursor: String\n) {\n  ...ProjectDetailScreen_query\n}\n\nfragment ProjectDetailScreen_query on RootQueryType {\n  project(id: $projectId) {\n    name\n    image\n    ...ProjectAuthor_project\n    category {\n      name\n      id\n    }\n    introduction\n    viewCount\n    favoriteCount\n    likeCount\n    relatedPostCount\n    ...ProjectDetailMaterialList_project\n    ...ProjectDetailFileList_project\n    ...ProjectDetailMethodList_project\n    tip\n    ...ProjectDetailFollowPostList_project\n    id\n  }\n}\n\nfragment ProjectAuthor_project on Project {\n  author {\n    name\n    image\n    followerCount\n    projectCount\n  }\n}\n\nfragment ProjectDetailMaterialList_project on Project {\n  materials {\n    name\n    amountUnit\n    url\n  }\n}\n\nfragment ProjectDetailFileList_project on Project {\n  fileResources {\n    name\n    url\n  }\n}\n\nfragment ProjectDetailMethodList_project on Project {\n  methods {\n    image\n    title\n    content\n  }\n}\n\nfragment ProjectDetailFollowPostList_project on Project {\n  relatedPosts(first: $relatedPostsCount, after: $relatedPostsCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        thumbnail {\n          image\n        }\n        author {\n          image\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9b6412e85e378a8b0c672cce48be2231';
module.exports = node;
