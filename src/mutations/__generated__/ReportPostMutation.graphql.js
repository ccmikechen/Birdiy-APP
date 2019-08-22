/**
 * @flow
 * @relayHash e01b6cf95e35e78ec338371eb1ac0fd8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type ReportPostMutationVariables = {|
  input: IdInput
|};
export type ReportPostMutationResponse = {|
  +reportPost: ?{|
    +reported: boolean
  |}
|};
export type ReportPostMutation = {|
  variables: ReportPostMutationVariables,
  response: ReportPostMutationResponse,
|};
*/


/*
mutation ReportPostMutation(
  $input: IdInput!
) {
  reportPost(input: $input) {
    reported
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
    "name": "reportPost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "IdInput!"
      }
    ],
    "concreteType": "ReportResult",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "reported",
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
    "name": "ReportPostMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ReportPostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ReportPostMutation",
    "id": null,
    "text": "mutation ReportPostMutation(\n  $input: IdInput!\n) {\n  reportPost(input: $input) {\n    reported\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '20ed5b2ebeb4d8c46904b5c558b2b3ed';
module.exports = node;
