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
  +id: string,
  +author: {|
    +id: string,
    +name: string,
    +image: ?string,
    +following: boolean,
  |},
  +insertedAt: ?any,
  +message: ?string,
  +thumbnail: ?{|
    +image: string
  |},
  +relatedProjectType: string,
  +relatedProjectName: ?string,
  +relatedProject: ?{|
    +id: string,
    +name: string,
  |},
  +$refType: PostSection_post$ref,
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
  "name": "PostSection_post",
  "type": "Post",
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
        (v2/*: any*/)
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
        (v0/*: any*/),
        (v1/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dc3137cc88802da04a465ca2ba09728c';
module.exports = node;
