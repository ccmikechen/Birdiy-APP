/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CategoriesTable_query$ref = any;
type ProjectThumbnailsTable_projects$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeScreen_query$ref: FragmentReference;
export type HomeScreen_query = {|
  +craftProjects: ?{|
    +$fragmentRefs: ProjectThumbnailsTable_projects$ref
  |},
  +electronicsProjects: ?{|
    +$fragmentRefs: ProjectThumbnailsTable_projects$ref
  |},
  +livingProjects: ?{|
    +$fragmentRefs: ProjectThumbnailsTable_projects$ref
  |},
  +outsideProjects: ?{|
    +$fragmentRefs: ProjectThumbnailsTable_projects$ref
  |},
  +scienceProjects: ?{|
    +$fragmentRefs: ProjectThumbnailsTable_projects$ref
  |},
  +workshopProjects: ?{|
    +$fragmentRefs: ProjectThumbnailsTable_projects$ref
  |},
  +$fragmentRefs: CategoriesTable_query$ref,
  +$refType: HomeScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "projectCount",
  "type": "Int"
},
v1 = [
  {
    "kind": "FragmentSpread",
    "name": "ProjectThumbnailsTable_projects",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "HomeScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "projectCount",
      "type": "Int"
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CategoriesTable_query",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": "craftProjects",
      "name": "allProjects",
      "storageKey": null,
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "categories": [
              "Craft"
            ]
          },
          "type": "ProjectFilter"
        },
        (v0/*: any*/)
      ],
      "concreteType": "ProjectConnection",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": "electronicsProjects",
      "name": "allProjects",
      "storageKey": null,
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "categories": [
              "Electronics"
            ]
          },
          "type": "ProjectFilter"
        },
        (v0/*: any*/)
      ],
      "concreteType": "ProjectConnection",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": "livingProjects",
      "name": "allProjects",
      "storageKey": null,
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "categories": [
              "Living"
            ]
          },
          "type": "ProjectFilter"
        },
        (v0/*: any*/)
      ],
      "concreteType": "ProjectConnection",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": "outsideProjects",
      "name": "allProjects",
      "storageKey": null,
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "categories": [
              "Outside"
            ]
          },
          "type": "ProjectFilter"
        },
        (v0/*: any*/)
      ],
      "concreteType": "ProjectConnection",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": "scienceProjects",
      "name": "allProjects",
      "storageKey": null,
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "categories": [
              "Science"
            ]
          },
          "type": "ProjectFilter"
        },
        (v0/*: any*/)
      ],
      "concreteType": "ProjectConnection",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": "workshopProjects",
      "name": "allProjects",
      "storageKey": null,
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "categories": [
              "Workshop"
            ]
          },
          "type": "ProjectFilter"
        },
        (v0/*: any*/)
      ],
      "concreteType": "ProjectConnection",
      "plural": false,
      "selections": (v1/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec32ec017711d3983a5236a3cc0e577d';
module.exports = node;
