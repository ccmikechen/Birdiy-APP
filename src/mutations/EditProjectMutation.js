import { graphql } from 'react-relay';
import { isEqual } from 'lodash';

import Mutation from '../relay/Mutation';
import { ImageFile, DocumentFile } from '../helpers/formFile';

import {
  DEFAULT_MATERIAL,
  DEFAULT_FILE,
  DEFAULT_METHOD,
} from '../constants/defaults';

const parseMaterials = materials => (
  materials.filter(material => (
    !isEqual(material, DEFAULT_MATERIAL)
  )).map((material, index) => ({
    ...material,
    order: index + 1,
  }))
);

const parseFiles = files => (
  files.filter(file => (
    !isEqual(file, DEFAULT_FILE)
  )).map((file, index) => ({
    id: file.id,
    name: file.name,
    ...((file.type === 'link') && ({ url: file.url })),
    ...((file.type === 'file')
        && (file.url.startsWith('file://'))
        && ({ file: new DocumentFile(file.url, file.name, file.localFileName) })),
    order: index + 1,
  }))
);

const parseMethods = methods => (
  methods.filter(method => (
    !isEqual(method, DEFAULT_METHOD)
  )).map((method, index) => ({
    id: method.id,
    title: method.title,
    content: method.content,
    ...(ImageFile.parseURI(method.image, 'image')),
    order: index + 1,
  }))
);

export default class EditProjectMutation extends Mutation {
  static mutation = graphql`
    mutation EditProjectMutation($input: EditProjectInput!) {
      editProject(input: $input) {
        project {
          id
        }
      }
    }
  `;

  static constraints = {
    name: {
      presence: { allowEmpty: false },
      length: { maximum: 20 },
    },
    category: {
      presence: true,
    },
  };

  constructor(input) {
    const {
      id,
      name,
      category,
      introduction,
      tip,
      image,
      materials,
      files,
      methods,
    } = input;

    const parsedInput = {
      id,
      name,
      category,
      introduction,
      tip,
      ...(ImageFile.parseURI(image, 'image')),
      materials: parseMaterials(materials),
      fileResources: parseFiles(files),
      methods: parseMethods(methods),
    };

    super(parsedInput);
  }
}
