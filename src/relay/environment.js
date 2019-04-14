import { createFetcher, createSubscriber } from '@absinthe/socket-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import socket from './socket';

export default new Environment({
  network: Network.create(
    createFetcher(socket),
    createSubscriber(socket),
  ),
  store: new Store(new RecordSource()),
});
