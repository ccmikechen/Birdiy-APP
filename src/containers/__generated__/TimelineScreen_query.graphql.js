/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PostSection_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimelineScreen_query$ref: FragmentReference;
export type TimelineScreen_query = {|
  +all: ?$ReadOnlyArray<?{|
    +$fragmentRefs: PostSection_post$ref
  |}>,
  +following: ?$ReadOnlyArray<?{|
    +$fragmentRefs: PostSection_post$ref
  |}>,
  +$refType: TimelineScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "PostSection_post",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TimelineScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "all",
      "name": "posts",
      "storageKey": null,
      "args": null,
      "concreteType": "Post",
      "plural": true,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": "following",
      "name": "posts",
      "storageKey": null,
      "args": null,
      "concreteType": "Post",
      "plural": true,
      "selections": (v0/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '4716ffc8692dc3d61bcdbd2a87bddbd5';
module.exports = node;
