import { graphql, createFragmentContainer } from 'react-relay';

import UserListItem from '../components/UserListItem';

export default createFragmentContainer(
  UserListItem,
  graphql`
    fragment UserListItem_user on User {
      id
      name
      image
    }
  `,
);
