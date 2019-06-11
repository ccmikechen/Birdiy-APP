import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';
import i18n from 'i18n-js';

import UserList from '../components/UserList';

class FollowerList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      user: PropTypes.shape({
        followedUsers: PropTypes.object,
      }),
    }).isRequired,
    relay: PropTypes.shape({
      hasMore: PropTypes.func.isRequired,
      isLoading: PropTypes.func.isRequired,
      refetchConnection: PropTypes.func.isRequired,
    }).isRequired,
    batchLoad: PropTypes.number,
  };

  static defaultProps = {
    batchLoad: 50,
  };

  loadMore = async () => {
    const { relay, batchLoad } = this.props;

    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }
    relay.loadMore(batchLoad);
  }

  render() {
    const { query, relay, batchLoad } = this.props;
    const data = query.user.followedUsers.edges.map(({ node }) => node);

    return query ? (
      <UserList
        {...this.props}
        users={data}
        canLoadMore={relay.hasMore()}
        loadMore={this.loadMore}
        refresh={(callback) => {
          relay.refetchConnection(null, callback, { count: batchLoad });
        }}
        emptyMessage={i18n.t('followers.emptyMessage')}
      />
    ) : null;
  }
}


export default createPaginationContainer(
  FollowerList,
  {
    query: graphql`
      fragment FollowerList_query on RootQueryType {
        user(id: $id) {
          followedUsers(
            first: $count,
            after: $cursor,
          ) @connection(key: "FollowerList_followedUsers") {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                ...UserListItem_user
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps: props => (
      props.query && props.query.user.followedUsers
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: ({ userId }, { count, cursor }) => ({
      count,
      cursor,
      id: userId,
    }),
    variables: { cursor: null },
    query: graphql`
      query FollowerListPaginationQuery (
        $id: ID!,
        $count: Int!,
        $cursor: String,
      ) {
        ...FollowerList_query
      }
    `,
  },
);
