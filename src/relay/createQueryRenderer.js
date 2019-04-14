// @flow
import React from 'react';
import { Text } from 'react-native';
import hoistStatics from 'hoist-non-react-statics';
import { QueryRenderer } from 'react-relay';

import environment from './environment';

export default (FragmentComponent, Component, config) => {
  const { query, queriesParams } = config;

  const QueryRendererWrapper = (componentProps) => {
    const variables = queriesParams
      ? queriesParams(componentProps)
      : config.variables;

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables}
        render={({ error, props }) => {
          if (error) {
            return <Text>{error.toString()}</Text>;
          }

          return (
            <FragmentComponent
              {...componentProps}
              query={props}
              loading={!props}
            />
          );
        }}
      />
    );
  };

  return hoistStatics(QueryRendererWrapper, Component);
};
