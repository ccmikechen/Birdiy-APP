/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProjectScreen_query$ref: FragmentReference;
export type EditProjectScreen_query = {|
  +project: ?{|
    +id: string,
    +name: string,
    +published: ?boolean,
    +image: ?string,
    +topic: {|
      +name: string
    |},
    +introduction: ?string,
    +tip: ?string,
    +materials: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +amountUnit: string,
      +url: ?string,
    |}>,
    +fileResources: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +url: string,
      +type: ?string,
    |}>,
    +methods: ?$ReadOnlyArray<?{|
      +id: string,
      +image: ?string,
      +title: ?string,
      +content: string,
    |}>,
  |},
  +$refType: EditProjectScreen_query$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "EditProjectScreen_query",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id",
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
          "variableName": "id",
          "type": "ID!"
        }
      ],
      "concreteType": "Project",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "published",
          "args": null,
          "storageKey": null
        },
        (v2/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "topic",
          "storageKey": null,
          "args": null,
          "concreteType": "ProjectTopic",
          "plural": false,
          "selections": [
            (v1/*: any*/)
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
          "name": "tip",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "materials",
          "storageKey": null,
          "args": null,
          "concreteType": "ProjectMaterial",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "amountUnit",
              "args": null,
              "storageKey": null
            },
            (v3/*: any*/)
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "fileResources",
          "storageKey": null,
          "args": null,
          "concreteType": "ProjectFileResource",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v3/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "type",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "methods",
          "storageKey": null,
          "args": null,
          "concreteType": "ProjectMethod",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v2/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "title",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "content",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '2cd41d53f7f18a021a0a730a7e092114';
module.exports = node;
