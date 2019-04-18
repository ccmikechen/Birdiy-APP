/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyPostsScene_posts$ref: FragmentReference;
export type MyPostsScene_posts = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +thumbnail: ?{|
        +image: string
      |},
      +message: ?string,
      +insertedAt: ?any,
    |}
  |}>,
  +$refType: MyPostsScene_posts$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MyPostsScene_posts",
  "type": "PostConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "PostEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Post",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "thumbnail",
              "storageKey": null,
              "args": null,
              "concreteType": "PostPhoto",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "image",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "message",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "insertedAt",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '111d8cb8f731deeb3d7285f720a74172';
module.exports = node;
