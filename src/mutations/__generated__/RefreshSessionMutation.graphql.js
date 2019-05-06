/**
 * @flow
 * @relayHash c5e23947cce4204cb500f7cbda678a9b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RefreshSessionInput = {|
  refreshToken: string
|};
export type RefreshSessionMutationVariables = {|
  input: RefreshSessionInput
|};
export type RefreshSessionMutationResponse = {|
  +refreshSession: ?{|
    +accessToken: string
  |}
|};
export type RefreshSessionMutation = {|
  variables: RefreshSessionMutationVariables,
  response: RefreshSessionMutationResponse,
|};
*/


/*
mutation RefreshSessionMutation(
  $input: RefreshSessionInput!
) {
  refreshSession(input: $input) {
    accessToken
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RefreshSessionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "refreshSession",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RefreshSessionInput!"
      }
    ],
    "concreteType": "Session",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "accessToken",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RefreshSessionMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RefreshSessionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RefreshSessionMutation",
    "id": null,
    "text": "mutation RefreshSessionMutation(\n  $input: RefreshSessionInput!\n) {\n  refreshSession(input: $input) {\n    accessToken\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1292db6665012a978e94155bc2bc4458';
module.exports = node;
