/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MyProjectList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyProjectsScreen_query$ref: FragmentReference;
export type MyProjectsScreen_query = {|
  +viewer: ?{|
    +id: string
  |},
  +$fragmentRefs: MyProjectList_query$ref,
  +$refType: MyProjectsScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MyProjectsScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "viewer",
      "storageKey": null,
      "args": null,
      "concreteType": "Viewer",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "MyProjectList_query",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cbdf1544ebce7fa221251752f0d3b677';
module.exports = node;
