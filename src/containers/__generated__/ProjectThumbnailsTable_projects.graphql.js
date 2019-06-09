/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProjectSection_project$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectThumbnailsTable_projects$ref: FragmentReference;
export type ProjectThumbnailsTable_projects = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +$fragmentRefs: ProjectSection_project$ref
    |}
  |}>,
  +$refType: ProjectThumbnailsTable_projects$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectThumbnailsTable_projects",
  "type": "ProjectConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "ProjectEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Project",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "ProjectSection_project",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bd623a9526329b69d71d0dcc4a359ae1';
module.exports = node;
