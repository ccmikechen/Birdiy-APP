/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectDetailMaterialList_project$ref: FragmentReference;
export type ProjectDetailMaterialList_project = {|
  +materials: ?$ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +amountUnit: string,
    +url: ?string,
  |}>,
  +$refType: ProjectDetailMaterialList_project$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectDetailMaterialList_project",
  "type": "Project",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "materials",
      "storageKey": null,
      "args": null,
      "concreteType": "ProjectMaterial",
      "plural": true,
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
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "amountUnit",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '55f5ba29389df9dac96badc8289c47e9';
module.exports = node;
