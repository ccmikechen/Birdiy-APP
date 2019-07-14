/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoriesTable_query$ref: FragmentReference;
export type CategoriesTable_query = {|
  +categories: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |},
  +$refType: CategoriesTable_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CategoriesTable_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "hotCategoryCount",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "hotCategoryOrder",
      "type": "RankOrder"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "categories",
      "name": "allProjectCategories",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "hotCategoryCount",
          "type": "Int"
        },
        {
          "kind": "Variable",
          "name": "order",
          "variableName": "hotCategoryOrder",
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
(node/*: any*/).hash = 'd428ebe2732c68cccb0a916b4d8e97e3';
module.exports = node;
