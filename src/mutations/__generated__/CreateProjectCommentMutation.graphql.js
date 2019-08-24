/**
 * @flow
 * @relayHash b4a23d77699c25c0c1fa752f722de959
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProjectCommentReplyList_comment$ref = any;
export type CreateProjectCommentInput = {|
  message: string,
  parentId?: ?string,
  projectId: string,
|};
export type CreateProjectCommentMutationVariables = {|
  input: CreateProjectCommentInput,
  repliesCount: number,
  repliesCursor?: ?string,
|};
export type CreateProjectCommentMutationResponse = {|
  +createProjectComment: ?{|
    +projectComment: {|
      +id: string,
      +user: {|
        +name: string,
        +image: ?string,
      |},
      +parent: ?{|
        +id: string
      |},
      +project: {|
        +id: string
      |},
      +message: string,
      +insertedAt: ?any,
      +$fragmentRefs: ProjectCommentReplyList_comment$ref,
    |}
  |}
|};
export type CreateProjectCommentMutation = {|
  variables: CreateProjectCommentMutationVariables,
  response: CreateProjectCommentMutationResponse,
|};
*/


/*
mutation CreateProjectCommentMutation(
  $input: CreateProjectCommentInput!
  $repliesCount: Int!
  $repliesCursor: String
) {
  createProjectComment(input: $input) {
    projectComment {
      id
      user {
        name
        image
        id
      }
      parent {
        id
      }
      project {
        id
      }
      message
      insertedAt
      ...ProjectCommentReplyList_comment
    }
  }
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
    "name": "input",
    "type": "CreateProjectCommentInput!",
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
    "name": "input",
    "variableName": "input",
    "type": "CreateProjectCommentInput!"
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
v5 = [
  (v2/*: any*/)
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "parent",
  "storageKey": null,
  "args": null,
  "concreteType": "ProjectComment",
  "plural": false,
  "selections": (v5/*: any*/)
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "project",
  "storageKey": null,
  "args": null,
  "concreteType": "Project",
  "plural": false,
  "selections": (v5/*: any*/)
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "message",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "insertedAt",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/),
    (v2/*: any*/)
  ]
},
v11 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateProjectCommentMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProjectComment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectCommentResult",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "projectComment",
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
                  (v3/*: any*/),
                  (v4/*: any*/)
                ]
              },
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "ProjectCommentReplyList_comment",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateProjectCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProjectComment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectCommentResult",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "projectComment",
            "storageKey": null,
            "args": null,
            "concreteType": "ProjectComment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v10/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "replies",
                "storageKey": null,
                "args": (v11/*: any*/),
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
                          (v10/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
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
                "args": (v11/*: any*/),
                "handle": "connection",
                "key": "ProjectCommentReplyList_replies",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateProjectCommentMutation",
    "id": null,
    "text": "mutation CreateProjectCommentMutation(\n  $input: CreateProjectCommentInput!\n  $repliesCount: Int!\n  $repliesCursor: String\n) {\n  createProjectComment(input: $input) {\n    projectComment {\n      id\n      user {\n        name\n        image\n        id\n      }\n      parent {\n        id\n      }\n      project {\n        id\n      }\n      message\n      insertedAt\n      ...ProjectCommentReplyList_comment\n    }\n  }\n}\n\nfragment ProjectCommentReplyList_comment on ProjectComment {\n  id\n  replies(first: $repliesCount, after: $repliesCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        ...ProjectCommentReplyListItem_comment\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment ProjectCommentReplyListItem_comment on ProjectComment {\n  id\n  user {\n    name\n    image\n    id\n  }\n  message\n  insertedAt\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0441d8ede8a2c2db13e371121968d5a7';
module.exports = node;
