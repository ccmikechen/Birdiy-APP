/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserFavoritesScene_projects$ref = any;
type UserPostsScene_posts$ref = any;
type UserProjectsScene_projects$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProfileTabMenu_profile$ref: FragmentReference;
export type ProfileTabMenu_profile = {|
  +projects: ?{|
    +$fragmentRefs: UserProjectsScene_projects$ref
  |},
  +posts: ?{|
    +$fragmentRefs: UserPostsScene_posts$ref
  |},
  +favoriteProjects: ?{|
    +$fragmentRefs: UserFavoritesScene_projects$ref
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
  "type": "Profile",
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
          "name": "UserProjectsScene_projects",
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
          "name": "UserPostsScene_posts",
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
          "name": "UserFavoritesScene_projects",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a281cf56246e03479a46f971af531975';
module.exports = node;
