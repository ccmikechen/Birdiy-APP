import { object, string } from 'yup';

export default () => object({
  name: string().required().max(100),
  topic: string().nullable().required(),
}).required();
