import * as AbsintheSocket from '@absinthe/socket';
import { Socket as PhoenixSocket } from 'phoenix';

export default AbsintheSocket.create(
  new PhoenixSocket('ws://192.168.43.154:4000/socket'),
);
