/**
 * @flow
 * @relayHash 9b20d2a5afc1644073aa976d9384772b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectInput = {|
  id: string
|};
export type ReportProjectMutationVariables = {|
  input: ProjectInput
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
  $input: ProjectInput!
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
    "type": "ProjectInput!",
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
        "type": "ProjectInput!"
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
    "text": "mutation ReportProjectMutation(\n  $input: ProjectInput!\n) {\n  reportProject(input: $input) {\n    reported\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9ae19d55922f27eb0096cedf5a588a37';
module.exports = node;
