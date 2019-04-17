/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectSection_project$ref: FragmentReference;
export type ProjectSection_project = {|
  +id: string,
  +name: string,
  +image: string,
  +author: {|
    +name: string
  |},
  +$refType: ProjectSection_project$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProjectSection_project",
  "type": "Project",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "author",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e26d4378faa71ca3ae9d5d0cb4002c7a';
module.exports = node;
