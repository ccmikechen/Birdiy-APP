import { object, string } from 'yup';

export default () => object({
  name: string().required().max(20),
  topic: string().nullable().required(),
}).required();
