import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import UserList from '../components/UserList';

class FollowingUserList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      user: PropTypes.shape({
        followingUsers: PropTypes.object,
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
    const data = query.user.followingUsers.edges.map(({ node }) => node);

    return query ? (
      <UserList
        {...this.props}
        users={data}
        canLoadMore={relay.hasMore()}
        loadMore={this.loadMore}
        refresh={(callback) => {
          relay.refetchConnection(null, callback, { count: batchLoad });
        }}
      />
    ) : null;
  }
}


export default createPaginationContainer(
  FollowingUserList,
  {
    query: graphql`
      fragment FollowingUserList_query on RootQueryType {
        user(id: $id) {
          followingUsers(
            first: $count,
            after: $cursor,
          ) @connection(key: "FollowingUserList_followingUsers") {
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
      props.query && props.query.user.followingUsers
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
      query FollowingUserListPaginationQuery (
        $id: ID!,
        $count: Int!,
        $cursor: String,
      ) {
        ...FollowingUserList_query
      }
    `,
  },
);
