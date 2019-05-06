const ENDPOINT = process.env.BIRDIY_SERVER_HOST || 'localhost';

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

  const promises = middlewares.map(middleware => (
    middleware(request)(
      operation,
      variables,
      cacheConfig,
      uploadables,
    )
  ));
  await Promise.all(promises);

  const response = await fetch(`http://${ENDPOINT}/api`, request);
  const json = await response.json();

  if (json.errors) {
    throw json.errors[0];
  }

  return json;
};
