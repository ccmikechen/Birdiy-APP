/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HotestProjectList_query$ref = any;
type NewestProjectList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectsScreen_query$ref: FragmentReference;
export type ProjectsScreen_query = {|
  +$fragmentRefs: NewestProjectList_query$ref & HotestProjectList_query$ref,
  +$refType: ProjectsScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectsScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "NewestProjectList_query",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "HotestProjectList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f2ad99f02cd11328d6cf569ad75c9351';
module.exports = node;
