import { graphql, createFragmentContainer } from 'react-relay';

import ProfileTabMenu from '../components/ProfileTabMenu';

export default createFragmentContainer(
  ProfileTabMenu,
  graphql`
    fragment ProfileTabMenu_profile on Profile {
      projects(
        first: $count
      ) {
        ...UserProjectsScene_projects
      }
      posts(
        first: $count
      ) {
        ...UserPostsScene_posts
      }
      favoriteProjects(
        first: $count
      ) {
        ...UserFavoritesScene_projects
      }
    }
  `,
);
