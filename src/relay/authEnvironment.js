// import { createSubscriber } from '@absinthe/socket-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import fetchQuery from './fetchQuery';
import authMiddleware from './middlewares/authMiddleware';
import uploadMiddleware from './middlewares/uploadMiddleware';
import { withErrorHandler } from '../errors';

// import socket from './socket';

export default new Environment({
  network: Network.create(
    withErrorHandler(fetchQuery([
      authMiddleware,
      uploadMiddleware,
    ])),
    //    createSubscriber(socket),
  ),
  store: new Store(new RecordSource()),
});
