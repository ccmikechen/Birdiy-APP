/**
 * @flow
 * @relayHash c83d3244fd2e0e9f66f0f538660f8443
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectInput = {|
  id: string
|};
export type ViewProjectMutationVariables = {|
  input: ProjectInput
|};
export type ViewProjectMutationResponse = {|
  +viewProject: ?{|
    +project: {|
      +viewed: ?boolean,
      +viewCount: number,
    |}
  |}
|};
export type ViewProjectMutation = {|
  variables: ViewProjectMutationVariables,
  response: ViewProjectMutationResponse,
|};
*/


/*
mutation ViewProjectMutation(
  $input: ProjectInput!
) {
  viewProject(input: $input) {
    project {
      viewed
      viewCount
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
    "type": "ProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "ProjectInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewed",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ViewProjectMutation",
    "type": "RootMutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewProject",
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
    "name": "ViewProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewProject",
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
    "name": "ViewProjectMutation",
    "id": null,
    "text": "mutation ViewProjectMutation(\n  $input: ProjectInput!\n) {\n  viewProject(input: $input) {\n    project {\n      viewed\n      viewCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c30994f9e195ab1367a5c62522b0932c';
module.exports = node;
