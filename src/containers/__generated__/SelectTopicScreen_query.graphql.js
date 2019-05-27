/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SelectTopicScreen_query$ref: FragmentReference;
export type SelectTopicScreen_query = {|
  +categories: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +image: ?string,
        +topics: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: string,
            |}
          |}>
        |},
      |}
    |}>
  |},
  +$refType: SelectTopicScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "SelectTopicScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "categories",
      "name": "allProjectCategories",
      "storageKey": "allProjectCategories(first:100000,order:\"NAME\")",
      "args": (v0/*: any*/),
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
                (v1/*: any*/),
                (v2/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "image",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "topics",
                  "storageKey": "topics(first:100000,order:\"NAME\")",
                  "args": (v0/*: any*/),
                  "concreteType": "ProjectTopicConnection",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "edges",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "ProjectTopicEdge",
                      "plural": true,
                      "selections": [
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "node",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "ProjectTopic",
                          "plural": false,
                          "selections": [
                            (v1/*: any*/),
                            (v2/*: any*/)
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f026cab424912beaa87cc7de15a3373b';
module.exports = node;
