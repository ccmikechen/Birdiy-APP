/**
 * @flow
 * @relayHash 1dca66e8c92d40ebc42b2e23be0124e1
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
  commentsCount: number,
  commentsCursor?: ?string,
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
  $commentsCount: Int!
  $commentsCursor: String
) {
  ...ProjectDetailScreen_query
}

fragment ProjectDetailScreen_query on RootQueryType {
  project(id: $projectId) {
    id
    name
    image
    video
    ...ProjectAuthor_project
    topic {
      name
      id
    }
    introduction
    source
    viewCount
    favoriteCount
    likeCount
    viewed
    liked
    favorite
    relatedPostCount
    ...ProjectDetailMaterialList_project
    ...ProjectDetailFileList_project
    ...ProjectDetailMethodList_project
    tip
    ...ProjectDetailFollowPostList_project
    ...ProjectDetailCommentList_project
    publishedAt
    deletedAt
  }
}

fragment ProjectAuthor_project on Project {
  author {
    id
    name
    image
    following
    followerCount
    projectCount
  }
}

fragment ProjectDetailMaterialList_project on Project {
  materials {
    id
    name
    amountUnit
    url
  }
}

fragment ProjectDetailFileList_project on Project {
  fileResources {
    name
    url
    id
  }
}

fragment ProjectDetailMethodList_project on Project {
  methods {
    image
    title
    content
    id
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
          id
        }
        author {
          id
          image
          name
        }
        __typename
      }
      cursor
    }
  }
}

fragment ProjectDetailCommentList_project on Project {
  comments(first: $commentsCount, after: $commentsCursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...ProjectCommentListItem_comment
        id
        __typename
      }
      cursor
    }
  }
}

fragment ProjectCommentListItem_comment on ProjectComment {
  id
  user {
    name
    image
    id
  }
  message
  insertedAt
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
  },
  {
    "kind": "LocalArgument",
    "name": "commentsCount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "commentsCursor",
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
  "name": "name",
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
],
v6 = {
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
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "commentsCursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "commentsCount",
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
            "name": "viewed",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "video",
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
              (v1/*: any*/),
              (v3/*: any*/),
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "following",
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
            "name": "topic",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectTopic",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v1/*: any*/)
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
            "name": "source",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "likeCount",
            "args": null,
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "liked",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "favorite",
            "args": null,
            "storageKey": null
          },
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
              (v3/*: any*/),
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v1/*: any*/)
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
              },
              (v1/*: any*/)
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
              (v6/*: any*/),
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
                      (v1/*: any*/),
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
                          (v1/*: any*/)
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
                          (v1/*: any*/),
                          (v2/*: any*/),
                          (v3/*: any*/)
                        ]
                      },
                      (v7/*: any*/)
                    ]
                  },
                  (v8/*: any*/)
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": (v9/*: any*/),
            "concreteType": "ProjectCommentConnection",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ProjectCommentEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ProjectComment",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "user",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v2/*: any*/),
                          (v1/*: any*/)
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
                      (v7/*: any*/)
                    ]
                  },
                  (v8/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "comments",
            "args": (v9/*: any*/),
            "handle": "connection",
            "key": "ProjectDetailCommentList_comments",
            "filters": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "publishedAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "deletedAt",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectDetailScreenQuery",
    "id": null,
    "text": "query ProjectDetailScreenQuery(\n  $projectId: ID!\n  $relatedPostsCount: Int!\n  $relatedPostsCursor: String\n  $commentsCount: Int!\n  $commentsCursor: String\n) {\n  ...ProjectDetailScreen_query\n}\n\nfragment ProjectDetailScreen_query on RootQueryType {\n  project(id: $projectId) {\n    id\n    name\n    image\n    video\n    ...ProjectAuthor_project\n    topic {\n      name\n      id\n    }\n    introduction\n    source\n    viewCount\n    favoriteCount\n    likeCount\n    viewed\n    liked\n    favorite\n    relatedPostCount\n    ...ProjectDetailMaterialList_project\n    ...ProjectDetailFileList_project\n    ...ProjectDetailMethodList_project\n    tip\n    ...ProjectDetailFollowPostList_project\n    ...ProjectDetailCommentList_project\n    publishedAt\n    deletedAt\n  }\n}\n\nfragment ProjectAuthor_project on Project {\n  author {\n    id\n    name\n    image\n    following\n    followerCount\n    projectCount\n  }\n}\n\nfragment ProjectDetailMaterialList_project on Project {\n  materials {\n    id\n    name\n    amountUnit\n    url\n  }\n}\n\nfragment ProjectDetailFileList_project on Project {\n  fileResources {\n    name\n    url\n    id\n  }\n}\n\nfragment ProjectDetailMethodList_project on Project {\n  methods {\n    image\n    title\n    content\n    id\n  }\n}\n\nfragment ProjectDetailFollowPostList_project on Project {\n  relatedPosts(first: $relatedPostsCount, after: $relatedPostsCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        thumbnail {\n          image\n          id\n        }\n        author {\n          id\n          image\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectDetailCommentList_project on Project {\n  comments(first: $commentsCount, after: $commentsCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectCommentListItem_comment\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectCommentListItem_comment on ProjectComment {\n  id\n  user {\n    name\n    image\n    id\n  }\n  message\n  insertedAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '40c808f99fcc944e5443db8276262d7b';
module.exports = node;
