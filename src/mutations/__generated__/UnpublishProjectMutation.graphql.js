/**
 * @flow
 * @relayHash 100516e46a9642d674f754796ee22518
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type UnpublishProjectMutationVariables = {|
  input: IdInput
|};
export type UnpublishProjectMutationResponse = {|
  +unpublishProject: ?{|
    +project: {|
      +id: string,
      +published: ?boolean,
    |}
  |}
|};
export type UnpublishProjectMutation = {|
  variables: UnpublishProjectMutationVariables,
  response: UnpublishProjectMutationResponse,
|};
*/


/*
mutation UnpublishProjectMutation(
  $input: IdInput!
) {
  unpublishProject(input: $input) {
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
    "name": "unpublishProject",
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
    "name": "UnpublishProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UnpublishProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UnpublishProjectMutation",
    "id": null,
    "text": "mutation UnpublishProjectMutation(\n  $input: IdInput!\n) {\n  unpublishProject(input: $input) {\n    project {\n      id\n      published\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '67e9e35cce772ad8aa9bf547c322e48c';
module.exports = node;
