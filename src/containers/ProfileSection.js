import { graphql, createFragmentContainer } from 'react-relay';

import ProfileSection from '../components/ProfileSection';

export default createFragmentContainer(
  ProfileSection,
  graphql`
    fragment ProfileSection_profile on User {
      name
      image
      followingCount
      followerCount
    }
  `,
);
