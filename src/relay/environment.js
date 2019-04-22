import { createSubscriber } from '@absinthe/socket-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import socket from './socket';

const ENDPOINT = process.env.BIRDIY_SERVER_HOST || 'localhost';

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  const request = {
    method: 'POST',
    headers: {
      //      Authorization: `JWT ${auth.getToken()}`,
    },
  };

  if (uploadables && Object.keys(uploadables).length > 0) {
    const formData = new FormData();
    formData.append('query', operation.text);
    formData.append('variables', JSON.stringify(variables));

    Object.keys(uploadables).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
        formData.append(key, uploadables[key]);
      }
    });

    request.body = formData;
  } else {
    request.headers['Content-Type'] = 'application/json';
    request.body = JSON.stringify({
      query: operation.text,
      variables,
    });
  }

  return fetch(`http://${ENDPOINT}/api`, request)
    .then(response => response.json());
}

export default new Environment({
  network: Network.create(
    fetchQuery,
    createSubscriber(socket),
  ),
  store: new Store(new RecordSource()),
});
