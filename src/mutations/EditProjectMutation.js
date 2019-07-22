import { graphql } from 'react-relay';

import { ImageFile } from '../helpers/formFile';
import {
  parseMaterials,
  parseFiles,
  parseMethods,
} from '../helpers/project';

import Mutation from '../relay/Mutation';

export default class EditProjectMutation extends Mutation {
  static mutation = graphql`
    mutation EditProjectMutation($input: EditProjectInput!) {
      editProject(input: $input) {
        project {
          id
          name
          image
          topic {
            name
          }
        }
      }
    }
  `;

  constructor(input) {
    const {
      image,
      materials,
      files,
      methods,
      ...restInput
    } = input;

    const parsedInput = {
      ...restInput,
      ...(ImageFile.parseURI(image, 'image')),
      materials: parseMaterials(materials),
      fileResources: parseFiles(files),
      methods: parseMethods(methods),
    };

    super(parsedInput);
  }
}
