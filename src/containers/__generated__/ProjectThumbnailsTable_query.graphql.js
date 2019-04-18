/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProjectSection_project$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectThumbnailsTable_query$ref: FragmentReference;
export type ProjectThumbnailsTable_query = {|
  +projects: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: ProjectSection_project$ref
      |}
    |}>
  |},
  +$refType: ProjectThumbnailsTable_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectThumbnailsTable_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "newProjectCount",
      "type": "Int"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "projects",
      "name": "allProjects",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "newProjectCount",
          "type": "Int"
        }
      ],
      "concreteType": "ProjectConnection",
      "plural": false,
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c75dd3413e463160c36d7b0fb624e8b5';
module.exports = node;
