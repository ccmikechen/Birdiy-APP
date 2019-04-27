import { graphql } from 'react-relay';

import Mutation from '../relay/Mutation';
import { ImageFile } from '../helpers/formFile';

const parsePhotos = photos => (
  photos.map((photo, index) => ({
    id: photo.id,
    ...((photo.image)
        && (photo.image.startsWith('file://'))
        && ({ image: new ImageFile(photo.image) })),
    order: index + 1,
  }))
);

export default class CreatePostMutation extends Mutation {
  static mutation = graphql`
    mutation CreatePostMutation($input: CreatePostInput!) {
      createPost(input: $input) {
        post {
          id
        }
      }
    }
  `;

  static constraints = {
    message: {
      presence: { allowEmpty: false },
      length: { maximum: 500 },
    },
  };

  constructor(input) {
    const {
      message,
      photos,
      relatedProject,
    } = input;

    const parsedInput = {
      message,
      photos: parsePhotos(photos),
      relatedProjectType: relatedProject.type.toUpperCase(),
      relatedProjectId: relatedProject.id,
      relatedProjectName: relatedProject.name,
    };

    super(parsedInput);
  }
}
