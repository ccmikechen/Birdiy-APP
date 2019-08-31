/**
 * @flow
 * @relayHash 9aca002276bc9e70a61caa27244f83a4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type ReportProjectCommentMutationVariables = {|
  input: IdInput
|};
export type ReportProjectCommentMutationResponse = {|
  +reportProjectComment: ?{|
    +reported: boolean
  |}
|};
export type ReportProjectCommentMutation = {|
  variables: ReportProjectCommentMutationVariables,
  response: ReportProjectCommentMutationResponse,
|};
*/


/*
mutation ReportProjectCommentMutation(
  $input: IdInput!
) {
  reportProjectComment(input: $input) {
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
    "name": "reportProjectComment",
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
    "name": "ReportProjectCommentMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ReportProjectCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ReportProjectCommentMutation",
    "id": null,
    "text": "mutation ReportProjectCommentMutation(\n  $input: IdInput!\n) {\n  reportProjectComment(input: $input) {\n    reported\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9b6d9af025456cbd260772e10c351b0b';
module.exports = node;
