import { graphql } from 'react-relay';

import { ImageFile } from '../helpers/formFile';
import {
  parseMaterials,
  parseFiles,
  parseMethods,
} from '../helpers/project';

import Mutation from '../relay/Mutation';

export default class EditAndPublishProjectMutation extends Mutation {
  static mutation = graphql`
    mutation EditAndPublishProjectMutation($input: EditProjectInput!) {
      editAndPublishProject(input: $input) {
        project {
          id
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
