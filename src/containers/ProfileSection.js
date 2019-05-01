import { graphql, createFragmentContainer } from 'react-relay';

import ProfileSection from '../components/ProfileSection';

export default createFragmentContainer(
  ProfileSection,
  graphql`
    fragment ProfileSection_profile on Profile {
      name
      image
      followingCount
      followerCount
    }
  `,
);
