/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllCategoriesScreen_query$ref: FragmentReference;
export type AllCategoriesScreen_query = {|
  +categories: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +image: ?string,
      |}
    |}>
  |},
  +$refType: AllCategoriesScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AllCategoriesScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
(node/*: any*/).hash = 'b3a8d6dd3d702a96ee32ca9cbbe95258';
module.exports = node;
