import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import { ImageFile, DocumentFile } from '../helpers/formFile';

const parseProjectImage = image => (
  image
    && (image.startsWith('file://'))
    && ({ image: new ImageFile(image) })
);

const parseMaterials = materials => (
  materials.map((material, index) => ({
    ...material,
    order: index + 1,
  }))
);

const parseFiles = files => (
  files.map((file, index) => ({
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
  methods.map((method, index) => ({
    id: method.id,
    title: method.title,
    content: method.content,
    ...((method.image)
        && (method.image.startsWith('file://'))
        && ({ image: new ImageFile(method.image) })),
    order: index + 1,
  }))
);

export default class EditProjectMutation extends Mutation {
  static mutation = graphql`
    mutation EditProjectMutation($input: EditProjectInput!) {
      editProject(input: $input) {
        project {
          name
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
      ...parseProjectImage(image),
      materials: parseMaterials(materials),
      fileResources: parseFiles(files),
      methods: parseMethods(methods),
    };

    super(parsedInput);
  }
}
