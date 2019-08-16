/**
 * @flow
 * @relayHash 757fe486a629ad0fdd79cb7c383c3471
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostInput = {|
  id: string
|};
export type ReportPostMutationVariables = {|
  input: PostInput
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
  $input: PostInput!
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
    "type": "PostInput!",
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
        "type": "PostInput!"
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
    "text": "mutation ReportPostMutation(\n  $input: PostInput!\n) {\n  reportPost(input: $input) {\n    reported\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8a007865eff4011ca14bf9eec2f12a21';
module.exports = node;
