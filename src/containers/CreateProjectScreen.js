import { graphql, createFragmentContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';

import createQueryRenderer from '../relay/createQueryRenderer';
import CreateProjectScreen from '../screens/CreateProjectScreen';

const CreateProjectScreenFragmentContainer = createFragmentContainer(
  CreateProjectScreen,
  graphql`
    fragment CreateProjectScreen_query on RootQueryType {
      viewer {
        id
      }
    }
  `,
);

export default withNavigation(
  createQueryRenderer(
    CreateProjectScreenFragmentContainer,
    CreateProjectScreen,
    {
      query: graphql`
        query CreateProjectScreenQuery {
          ...CreateProjectScreen_query
        }
      `,
      auth: true,
    },
  ),
);
