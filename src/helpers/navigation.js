/* eslint-disable import/prefer-default-export */

import { StackActions, NavigationActions } from 'react-navigation';

export const resetToHome = (navigation) => {
  navigation.dispatch(StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Main' }),
    ],
  }));
};
