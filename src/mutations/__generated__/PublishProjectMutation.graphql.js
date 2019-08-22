/**
 * @flow
 * @relayHash 7eb1dcc24851f55fb24fa629b6858143
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type PublishProjectMutationVariables = {|
  input: IdInput
|};
export type PublishProjectMutationResponse = {|
  +publishProject: ?{|
    +project: {|
      +id: string,
      +published: ?boolean,
    |}
  |}
|};
export type PublishProjectMutation = {|
  variables: PublishProjectMutationVariables,
  response: PublishProjectMutationResponse,
|};
*/


/*
mutation PublishProjectMutation(
  $input: IdInput!
) {
  publishProject(input: $input) {
    project {
      id
      published
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
    "kind": "LinkedField",
    "alias": null,
    "name": "publishProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "IdInput!"
      }
    ],
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PublishProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PublishProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "PublishProjectMutation",
    "id": null,
    "text": "mutation PublishProjectMutation(\n  $input: IdInput!\n) {\n  publishProject(input: $input) {\n    project {\n      id\n      published\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '06eefdcc4784e40192e98fb9ff325aee';
module.exports = node;
