
import * as AbsintheSocket from '@absinthe/socket';
import { Socket as PhoenixSocket } from 'phoenix';
import config from '../configs';

const ENDPOINT = config.BIRDIY_SERVER_HOST || 'localhost';

export default AbsintheSocket.create(
  new PhoenixSocket(`ws://${ENDPOINT}/socket`),
);
