import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import { ImageFile } from '../helpers/formFile';

export default class EditProfileMutation extends Mutation {
  static mutation = graphql`
    mutation EditProfileMutation($input: EditUserInput!) {
      editViewer(input: $input) {
        viewer {
          id
          name
          image
        }
      }
    }
  `;

  static constraints = {
    name: {
      presence: { allowEmpty: false },
      length: { maximum: 20 },
    },
  };

  constructor(input) {
    const { name, image } = input;

    const parsedInput = {
      name,
      ...(ImageFile.parseURI(image, 'image')),
    };

    super(parsedInput);
  }
}
