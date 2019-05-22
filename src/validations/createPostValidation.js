import {
  object, string, array, mixed,
} from 'yup';
import i18n from 'i18n-js';

const photosMinMessage = ({ min }) => (
  i18n.t('errors.photos.min', { min })
);

export default () => object({
  message: string().required().max(500),
  relatedProject: object({
    type: mixed().oneOf(['custom', 'project']).required(),
    id: string().nullable().when('type', {
      is: 'project',
      then: string().required(),
    }),
    name: string().when('type', {
      is: 'custom',
      then: string().required(),
    }),
  }).required(),
  photos: array().of(string()).min(1, photosMinMessage),
}).required();
