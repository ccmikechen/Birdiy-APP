/**
 * @flow
 * @relayHash 3fdf9e7e4c9213b76d47b4601647afc1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectInput = {|
  id: string
|};
export type LikeProjectMutationVariables = {|
  input: ProjectInput
|};
export type LikeProjectMutationResponse = {|
  +likeProject: ?{|
    +project: {|
      +liked: ?boolean,
      +likeCount: ?number,
    |}
  |}
|};
export type LikeProjectMutation = {|
  variables: LikeProjectMutationVariables,
  response: LikeProjectMutationResponse,
|};
*/


/*
mutation LikeProjectMutation(
  $input: ProjectInput!
) {
  likeProject(input: $input) {
    project {
      liked
      likeCount
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "ProjectInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "liked",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likeCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LikeProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "likeProject",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectResult",
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
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LikeProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "likeProject",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProjectResult",
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
              (v3/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "LikeProjectMutation",
    "id": null,
    "text": "mutation LikeProjectMutation(\n  $input: ProjectInput!\n) {\n  likeProject(input: $input) {\n    project {\n      liked\n      likeCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6d6ff83d07202526e56e0702b3f87a7f';
module.exports = node;