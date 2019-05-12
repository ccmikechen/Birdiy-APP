import config from '../configs';

const ENDPOINT = config.BIRDIY_SERVER_HOST || 'localhost';

export default middlewares => async (
  operation,
  variables,
  cacheConfig,
  uploadables,
) => {
  const request = {
    method: 'POST',
    headers: {},
  };

  const promises = middlewares.map(async middleware => (
    await middleware(request)( // eslint-disable-line no-return-await
      operation,
      variables,
      cacheConfig,
      uploadables,
    )
  ));
  await Promise.all(promises);

  const response = await fetch(`${ENDPOINT}/api`, request);
  const json = await response.json();

  return json;
};
