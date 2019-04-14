/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostSection_post$ref: FragmentReference;
export type PostSection_post = {|
  +author: {|
    +name: string,
    +image: ?string,
  |},
  +insertedAt: ?any,
  +message: ?string,
  +thumbnail: ?{|
    +image: string
  |},
  +relatedProjectType: string,
  +relatedProjectName: ?string,
  +relatedProject: ?{|
    +name: string
  |},
  +$refType: PostSection_post$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PostSection_post",
  "type": "Post",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        (v1/*: any*/)
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "insertedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "message",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "thumbnail",
      "storageKey": null,
      "args": null,
      "concreteType": "PostPhoto",
      "plural": false,
      "selections": [
        (v1/*: any*/)
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "relatedProjectType",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "relatedProjectName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "relatedProject",
      "storageKey": null,
      "args": null,
      "concreteType": "Project",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ba1ef2bd69dc6d044428a043cb403bb';
module.exports = node;
