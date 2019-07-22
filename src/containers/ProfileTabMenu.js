import { graphql, createFragmentContainer } from 'react-relay';

import ProfileTabMenu from '../components/ProfileTabMenu';

export default createFragmentContainer(
  ProfileTabMenu,
  graphql`
    fragment ProfileTabMenu_profile on Profile {
      ...UserProjectsScene_profile
      ...UserPostsScene_profile
      ...UserFavoritesScene_profile
    }
  `,
);
