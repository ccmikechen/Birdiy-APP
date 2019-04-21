import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import CategoriesTable from '../components/CategoriesTable';

const CategoriesTableFragmentContainer = (props) => {
  const { query } = props;
  const categories = query.categories.edges.map(({ node }) => node);

  return (
    <CategoriesTable
      {...props}
      categories={categories}
    />
  );
};

CategoriesTableFragmentContainer.propTypes = {
  query: PropTypes.shape({
    categories: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          image: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export default createFragmentContainer(
  CategoriesTableFragmentContainer,
  graphql`
    fragment CategoriesTable_query on RootQueryType {
      categories: allProjectCategories(
        first: $hotCategoryCount,
        order: $hotCategoryOrder,
      ) {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  `,
);
