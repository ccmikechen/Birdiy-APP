/**
 * @flow
 * @relayHash 59ad644d0fa6aa7c21740d97b646b069
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type CancelFavoriteProjectMutationVariables = {|
  input: IdInput
|};
export type CancelFavoriteProjectMutationResponse = {|
  +cancelFavoriteProject: ?{|
    +project: {|
      +favorite: ?boolean,
      +favoriteCount: ?number,
    |}
  |}
|};
export type CancelFavoriteProjectMutation = {|
  variables: CancelFavoriteProjectMutationVariables,
  response: CancelFavoriteProjectMutationResponse,
|};
*/


/*
mutation CancelFavoriteProjectMutation(
  $input: IdInput!
) {
  cancelFavoriteProject(input: $input) {
    project {
      favorite
      favoriteCount
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
    "type": "IdInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "IdInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "favorite",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "favoriteCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CancelFavoriteProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cancelFavoriteProject",
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
    "name": "CancelFavoriteProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cancelFavoriteProject",
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
    "name": "CancelFavoriteProjectMutation",
    "id": null,
    "text": "mutation CancelFavoriteProjectMutation(\n  $input: IdInput!\n) {\n  cancelFavoriteProject(input: $input) {\n    project {\n      favorite\n      favoriteCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7c56727249f1b4d11e2e28b8107f547e';
module.exports = node;
