import { object, string } from 'yup';

export default () => object({
  name: string().required().max(20),
  category: string().nullable().required(),
}).required();
