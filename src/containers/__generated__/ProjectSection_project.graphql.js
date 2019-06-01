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
  +image: ?string,
  +author: {|
    +name: string
  |},
  +published: ?boolean,
  +viewCount: ?number,
  +likeCount: ?number,
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "published",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "viewCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "likeCount",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '0fe8b79cbe39bfb7a2dc63b7e1ecc1dd';
module.exports = node;
