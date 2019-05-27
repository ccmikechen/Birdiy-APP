/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectActivitySection_project$ref: FragmentReference;
export type ProjectActivitySection_project = {|
  +id: string,
  +author: {|
    +id: string,
    +name: string,
    +image: ?string,
    +following: boolean,
  |},
  +image: ?string,
  +name: string,
  +topic: {|
    +name: string
  |},
  +$refType: ProjectActivitySection_project$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProjectActivitySection_project",
  "type": "Project",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "author",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "following",
          "args": null,
          "storageKey": null
        }
      ]
    },
    (v2/*: any*/),
    (v1/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "topic",
      "storageKey": null,
      "args": null,
      "concreteType": "ProjectTopic",
      "plural": false,
      "selections": [
        (v1/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fc84b66ac8afceb2835839c2a3174b62';
module.exports = node;
