import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ActivityList from '../components/ActivityList';
import LoginMessageView from '../components/LoginMessageView';

import { DEFAULT_POST_BATCH_LOAD } from '../constants/defaults';

class FollowingActivityList extends Component {
  static propTypes = {
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        following: PropTypes.shape({
          edges: PropTypes.arrayOf(PropTypes.shape({
            node: PropTypes.shape({
              project: PropTypes.object,
              post: PropTypes.object,
            }),
          })),
        }),
      }),
    }).isRequired,
    relay: PropTypes.shape({
      hasMore: PropTypes.func.isRequired,
      isLoading: PropTypes.func.isRequired,
      refetchConnection: PropTypes.func.isRequired,
    }).isRequired,
    batchLoad: PropTypes.number,
    onLogin: PropTypes.func.isRequired,
  };

  static defaultProps = {
    batchLoad: DEFAULT_POST_BATCH_LOAD,
  };

  loadMore = async () => {
    const { relay, batchLoad } = this.props;

    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }
    relay.loadMore(batchLoad);
  }

  getSections = () => {
    const { query } = this.props;

    return query.viewer.following.edges.map(({ node }) => {
      if (node.project) {
        return {
          type: 'project',
          data: node.project,
          createdAt: node.insertedAt,
        };
      }
      if (node.post) {
        return {
          type: 'post',
          data: node.post,
          createdAt: node.insertedAt,
        };
      }

      return { type: null };
    });
  };

  render() {
    const {
      query, relay, batchLoad, onLogin,
    } = this.props;

    if (!query.viewer) {
      return (
        <LoginMessageView onLogin={onLogin} />
      );
    }

    return query ? (
      <ActivityList
        {...this.props}
        sections={this.getSections()}
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
  FollowingActivityList,
  {
    query: graphql`
      fragment FollowingActivityList_query on RootQueryType {
        viewer {
          following: followingUserActivities(
            first: $count,
            after: $followingCursor
          ) @connection(key: "FollowingActivityList_following") {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                project {
                  ...ProjectActivitySection_project
                }
                post {
                  ...PostSection_post
                }
                insertedAt
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
      props.query && props.query.viewer.following
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (props, { count, cursor }) => ({
      count,
      followingCursor: cursor,
    }),
    variables: { followingCursor: null },
    query: graphql`
      query FollowingActivityListPaginationQuery (
        $count: Int!,
        $followingCursor: String
      ) {
        ...FollowingActivityList_query
      }
    `,
  },
);
