/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProjectAuthor_project$ref = any;
type ProjectDetailFileList_project$ref = any;
type ProjectDetailFollowPostList_project$ref = any;
type ProjectDetailMaterialList_project$ref = any;
type ProjectDetailMethodList_project$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectDetailScreen_query$ref: FragmentReference;
export type ProjectDetailScreen_query = {|
  +project: ?{|
    +id: string,
    +name: string,
    +image: ?string,
    +category: {|
      +name: string
    |},
    +introduction: ?string,
    +viewCount: ?number,
    +favoriteCount: ?number,
    +likeCount: ?number,
    +viewed: ?boolean,
    +liked: ?boolean,
    +favorite: ?boolean,
    +relatedPostCount: ?number,
    +tip: ?string,
    +$fragmentRefs: ProjectAuthor_project$ref & ProjectDetailMaterialList_project$ref & ProjectDetailFileList_project$ref & ProjectDetailMethodList_project$ref & ProjectDetailFollowPostList_project$ref,
  |},
  +$refType: ProjectDetailScreen_query$ref,
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
  "name": "ProjectDetailScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "projectId",
      "type": "ID!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "project",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "projectId",
          "type": "ID!"
        }
      ],
      "concreteType": "Project",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "viewed",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "image",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ProjectAuthor_project",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "category",
          "storageKey": null,
          "args": null,
          "concreteType": "ProjectCategory",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "introduction",
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
          "name": "favoriteCount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "likeCount",
          "args": null,
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "liked",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "favorite",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "relatedPostCount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ProjectDetailMaterialList_project",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ProjectDetailFileList_project",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ProjectDetailMethodList_project",
          "args": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "tip",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ProjectDetailFollowPostList_project",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd843e0b65c010c2f85ec60a76757bbb6';
module.exports = node;
