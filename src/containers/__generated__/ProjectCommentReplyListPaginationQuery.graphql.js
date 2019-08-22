/**
 * @flow
 * @relayHash f1049831a36fbf228f77d366d086ad1a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectCommentReplyList_comment$ref = any;
export type ProjectCommentReplyListPaginationQueryVariables = {|
  commentId: string,
  repliesCount: number,
  cursor?: ?string,
|};
export type ProjectCommentReplyListPaginationQueryResponse = {|
  +projectComment: ?{|
    +$fragmentRefs: ProjectCommentReplyList_comment$ref
  |}
|};
export type ProjectCommentReplyListPaginationQuery = {|
  variables: ProjectCommentReplyListPaginationQueryVariables,
  response: ProjectCommentReplyListPaginationQueryResponse,
|};
*/


/*
query ProjectCommentReplyListPaginationQuery(
  $commentId: ID!
  $repliesCount: Int!
  $cursor: String
) {
  projectComment(id: $commentId) {
    ...ProjectCommentReplyList_comment
    id
  }
}

fragment ProjectCommentReplyList_comment on ProjectComment {
  id
  replies(first: $repliesCount, after: $cursor) {
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
    "name": "commentId",
    "type": "ID!",
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
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "commentId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "repliesCount",
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProjectCommentReplyListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "projectComment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectComment",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProjectCommentReplyList_comment",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProjectCommentReplyListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "projectComment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "replies",
            "storageKey": null,
            "args": (v3/*: any*/),
            "concreteType": "ProjectCommentConnection",
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
                      (v2/*: any*/),
                      {
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
                          (v2/*: any*/)
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
            "name": "replies",
            "args": (v3/*: any*/),
            "handle": "connection",
            "key": "ProjectCommentReplyList_replies",
            "filters": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectCommentReplyListPaginationQuery",
    "id": null,
    "text": "query ProjectCommentReplyListPaginationQuery(\n  $commentId: ID!\n  $repliesCount: Int!\n  $cursor: String\n) {\n  projectComment(id: $commentId) {\n    ...ProjectCommentReplyList_comment\n    id\n  }\n}\n\nfragment ProjectCommentReplyList_comment on ProjectComment {\n  id\n  replies(first: $repliesCount, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectCommentReplyListItem_comment\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectCommentReplyListItem_comment on ProjectComment {\n  id\n  user {\n    name\n    image\n    id\n  }\n  message\n  insertedAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '22cacc5bc7b7279ba80ee174347605e9';
module.exports = node;
