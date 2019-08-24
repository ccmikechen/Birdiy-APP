/**
 * @flow
 * @relayHash c59e5604235b2f6c6fea998a1ebdbf20
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectDetailCommentList_project$ref = any;
export type ProjectDetailCommentListPaginationQueryVariables = {|
  projectId: string,
  commentsCount: number,
  cursor?: ?string,
  repliesCount: number,
  repliesCursor?: ?string,
|};
export type ProjectDetailCommentListPaginationQueryResponse = {|
  +project: ?{|
    +$fragmentRefs: ProjectDetailCommentList_project$ref
  |}
|};
export type ProjectDetailCommentListPaginationQuery = {|
  variables: ProjectDetailCommentListPaginationQueryVariables,
  response: ProjectDetailCommentListPaginationQueryResponse,
|};
*/


/*
query ProjectDetailCommentListPaginationQuery(
  $projectId: ID!
  $commentsCount: Int!
  $cursor: String
  $repliesCount: Int!
  $repliesCursor: String
) {
  project(id: $projectId) {
    ...ProjectDetailCommentList_project
    id
  }
}

fragment ProjectDetailCommentList_project on Project {
  comments(first: $commentsCount, after: $cursor) {
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
  ...ProjectCommentReplyList_comment
}

fragment ProjectCommentReplyList_comment on ProjectComment {
  id
  replies(first: $repliesCount, after: $repliesCursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...ProjectCommentReplyListItem_comment
        id
        __typename
      }
      cursor
    }
  }
}

fragment ProjectCommentReplyListItem_comment on ProjectComment {
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
    "name": "commentsCount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "repliesCount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "repliesCursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "projectId",
    "type": "ID!"
  }
],
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
    "variableName": "commentsCount",
    "type": "Int"
  }
],
v3 = {
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    },
    (v4/*: any*/)
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "message",
  "args": null,
  "storageKey": null
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
    "kind": "Variable",
    "name": "after",
    "variableName": "repliesCursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "repliesCount",
    "type": "Int"
  }
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProjectDetailCommentListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProjectDetailCommentList_project",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProjectDetailCommentListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "project",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "ProjectCommentConnection",
            "plural": false,
            "selections": [
              (v3/*: any*/),
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
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "replies",
                        "storageKey": null,
                        "args": (v8/*: any*/),
                        "concreteType": "ProjectCommentConnection",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
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
                                  (v4/*: any*/),
                                  (v5/*: any*/),
                                  (v6/*: any*/),
                                  (v7/*: any*/),
                                  (v9/*: any*/)
                                ]
                              },
                              (v10/*: any*/)
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "replies",
                        "args": (v8/*: any*/),
                        "handle": "connection",
                        "key": "ProjectCommentReplyList_replies",
                        "filters": null
                      },
                      (v9/*: any*/)
                    ]
                  },
                  (v10/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "comments",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "ProjectDetailCommentList_comments",
            "filters": null
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectDetailCommentListPaginationQuery",
    "id": null,
    "text": "query ProjectDetailCommentListPaginationQuery(\n  $projectId: ID!\n  $commentsCount: Int!\n  $cursor: String\n  $repliesCount: Int!\n  $repliesCursor: String\n) {\n  project(id: $projectId) {\n    ...ProjectDetailCommentList_project\n    id\n  }\n}\n\nfragment ProjectDetailCommentList_project on Project {\n  comments(first: $commentsCount, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectCommentListItem_comment\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectCommentListItem_comment on ProjectComment {\n  id\n  user {\n    name\n    image\n    id\n  }\n  message\n  insertedAt\n  ...ProjectCommentReplyList_comment\n}\n\nfragment ProjectCommentReplyList_comment on ProjectComment {\n  id\n  replies(first: $repliesCount, after: $repliesCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectCommentReplyListItem_comment\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectCommentReplyListItem_comment on ProjectComment {\n  id\n  user {\n    name\n    image\n    id\n  }\n  message\n  insertedAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '63ce5ae100624fd63238d82a469bdd6e';
module.exports = node;
