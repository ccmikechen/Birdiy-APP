// @flow
import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { QueryRenderer } from 'react-relay';

import environment from './environment';
import authEnvironment from './authEnvironment';

import { InternalServerError } from '../errors';

export default (FragmentComponent, Component, config) => {
  const { query, queriesParams, auth } = config;

  const QueryRendererWrapper = (componentProps) => {
    const variables = {
      ...(queriesParams && queriesParams(componentProps)),
      ...config.variables,
    };

    return (
      <QueryRenderer
        environment={auth ? authEnvironment : environment}
        query={query}
        variables={variables}
        render={({ error, props }) => {
          if (error instanceof InternalServerError) {
            return null;
          }

          return (
            <FragmentComponent
              {...componentProps}
              query={props}
              error={error}
              loading={!(error || props)}
              variables={variables}
            />
          );
        }}
      />
    );
  };

  return hoistStatics(QueryRendererWrapper, Component);
};
