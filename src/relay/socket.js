import * as AbsintheSocket from '@absinthe/socket';
import { Socket as PhoenixSocket } from 'phoenix';

const ENDPOINT = process.env.BIRDIY_SERVER_HOST || 'localhost';

export default AbsintheSocket.create(
  new PhoenixSocket(`ws://${ENDPOINT}/socket`),
);
