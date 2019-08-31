/**
 * @flow
 * @relayHash ce866ac97232e904445f106e61217615
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type FavoriteProjectMutationVariables = {|
  input: IdInput
|};
export type FavoriteProjectMutationResponse = {|
  +favoriteProject: ?{|
    +project: {|
      +favorite: ?boolean,
      +favoriteCount: ?number,
    |}
  |}
|};
export type FavoriteProjectMutation = {|
  variables: FavoriteProjectMutationVariables,
  response: FavoriteProjectMutationResponse,
|};
*/


/*
mutation FavoriteProjectMutation(
  $input: IdInput!
) {
  favoriteProject(input: $input) {
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
    "name": "FavoriteProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "favoriteProject",
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
    "name": "FavoriteProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "favoriteProject",
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
    "name": "FavoriteProjectMutation",
    "id": null,
    "text": "mutation FavoriteProjectMutation(\n  $input: IdInput!\n) {\n  favoriteProject(input: $input) {\n    project {\n      favorite\n      favoriteCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3af98fe42e78538dcad149650907f239';
module.exports = node;
