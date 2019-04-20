/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectDetailMethodList_project$ref: FragmentReference;
export type ProjectDetailMethodList_project = {|
  +methods: ?$ReadOnlyArray<?{|
    +image: ?string,
    +title: ?string,
    +content: string,
  |}>,
  +$refType: ProjectDetailMethodList_project$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectDetailMethodList_project",
  "type": "Project",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "methods",
      "storageKey": null,
      "args": null,
      "concreteType": "ProjectMethod",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "image",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "content",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5a53b2b40c5cd73320fddb51a404fd0b';
module.exports = node;
