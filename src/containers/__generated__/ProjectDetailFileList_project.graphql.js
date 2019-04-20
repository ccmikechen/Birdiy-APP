/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectDetailFileList_project$ref: FragmentReference;
export type ProjectDetailFileList_project = {|
  +fileResources: ?$ReadOnlyArray<?{|
    +name: string,
    +url: string,
  |}>,
  +$refType: ProjectDetailFileList_project$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectDetailFileList_project",
  "type": "Project",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "fileResources",
      "storageKey": null,
      "args": null,
      "concreteType": "ProjectFileResource",
      "plural": true,
      "selections": [
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
          "name": "url",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '10a1bda1e3db06e770db7fc1cb1e35ed';
module.exports = node;
