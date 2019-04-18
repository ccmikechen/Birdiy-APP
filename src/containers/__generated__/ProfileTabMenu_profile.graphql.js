/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MyFavoritesScene_projects$ref = any;
type MyPostsScene_posts$ref = any;
type MyProjectsScene_projects$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProfileTabMenu_profile$ref: FragmentReference;
export type ProfileTabMenu_profile = {|
  +projects: ?{|
    +$fragmentRefs: MyProjectsScene_projects$ref
  |},
  +posts: ?{|
    +$fragmentRefs: MyPostsScene_posts$ref
  |},
  +favoriteProjects: ?{|
    +$fragmentRefs: MyFavoritesScene_projects$ref
  |},
  +$refType: ProfileTabMenu_profile$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  }
];
return {
  "kind": "Fragment",
  "name": "ProfileTabMenu_profile",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "projects",
      "storageKey": null,
      "args": (v0/*: any*/),
      "concreteType": "ProjectConnection",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "MyProjectsScene_projects",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "posts",
      "storageKey": null,
      "args": (v0/*: any*/),
      "concreteType": "PostConnection",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "MyPostsScene_posts",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "favoriteProjects",
      "storageKey": null,
      "args": (v0/*: any*/),
      "concreteType": "ProjectConnection",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "MyFavoritesScene_projects",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '1df14aff075178779cb037cc33f5c00a';
module.exports = node;
