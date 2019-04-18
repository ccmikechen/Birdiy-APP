import { graphql, createFragmentContainer } from 'react-relay';

import ProfileTabMenu from '../components/ProfileTabMenu';

export default createFragmentContainer(
  ProfileTabMenu,
  graphql`
    fragment ProfileTabMenu_profile on User {
      projects(
        first: $count
      ) {
        ...MyProjectsScene_projects
      }
      posts(
        first: $count
      ) {
        ...MyPostsScene_posts
      }
      favoriteProjects(
        first: $count
      ) {
        ...MyFavoritesScene_projects
      }
    }
  `,
);
