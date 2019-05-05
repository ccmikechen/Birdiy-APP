// @flow
import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { QueryRenderer } from 'react-relay';

import environment from './environment';

export default (FragmentComponent, Component, config) => {
  const { query, queriesParams } = config;

  const QueryRendererWrapper = (componentProps) => {
    const variables = {
      ...(queriesParams && queriesParams(componentProps)),
      ...config.variables,
    };

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables}
        render={({ error, props }) => (
          <FragmentComponent
            {...componentProps}
            query={props}
            error={error}
            loading={!(error || props)}
            variables={variables}
          />
        )}
      />
    );
  };

  return hoistStatics(QueryRendererWrapper, Component);
};
