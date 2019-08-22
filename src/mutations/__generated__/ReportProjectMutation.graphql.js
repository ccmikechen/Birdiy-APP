/**
 * @flow
 * @relayHash fd8f628767beb6f2b0a7b151a39ba421
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdInput = {|
  id: string
|};
export type ReportProjectMutationVariables = {|
  input: IdInput
|};
export type ReportProjectMutationResponse = {|
  +reportProject: ?{|
    +reported: boolean
  |}
|};
export type ReportProjectMutation = {|
  variables: ReportProjectMutationVariables,
  response: ReportProjectMutationResponse,
|};
*/


/*
mutation ReportProjectMutation(
  $input: IdInput!
) {
  reportProject(input: $input) {
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
    "name": "reportProject",
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
    "name": "ReportProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ReportProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ReportProjectMutation",
    "id": null,
    "text": "mutation ReportProjectMutation(\n  $input: IdInput!\n) {\n  reportProject(input: $input) {\n    reported\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1fc2dbafd2bdf6c52affb969569e33f1';
module.exports = node;
