/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HotestProjectList_query$ref = any;
type NewestProjectList_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectsScreen_query$ref: FragmentReference;
export type ProjectsScreen_query = {|
  +categories: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +image: ?string,
      |}
    |}>
  |},
  +$fragmentRefs: NewestProjectList_query$ref & HotestProjectList_query$ref,
  +$refType: ProjectsScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectsScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "NewestProjectList_query",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "HotestProjectList_query",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": "categories",
      "name": "allProjectCategories",
      "storageKey": "allProjectCategories(first:100000,order:\"NAME\")",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100000,
          "type": "Int"
        },
        {
          "kind": "Literal",
          "name": "order",
          "value": "NAME",
          "type": "RankOrder"
        }
      ],
      "concreteType": "ProjectCategoryConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ProjectCategoryEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "ProjectCategory",
              "plural": false,
              "selections": [
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
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "image",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '67998e637d038e1e46b15cc37d2a7818';
module.exports = node;
