import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';

import ProjectCommentReplyList from '../components/ProjectCommentReplyList';

class ProjectCommentReplyListContainer extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      replies: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.object,
        })),
      }),
    }).isRequired,
    relay: PropTypes.shape({
      hasMore: PropTypes.func.isRequired,
      isLoading: PropTypes.func.isRequired,
    }).isRequired,
    batchLoad: PropTypes.number,
  };

  static defaultProps = {
    batchLoad: 5,
  };

  loadMore = async () => {
    const { relay, batchLoad } = this.props;

    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }
    relay.loadMore(batchLoad);
  }

  render() {
    const { comment, relay } = this.props;
    const replies = comment.replies.edges.map(({ node }) => node);

    return replies.length === 0 ? null : (
      <ProjectCommentReplyList
        {...this.props}
        replies={replies}
        canLoadMore={relay.hasMore()}
        loadMore={this.loadMore}
      />
    );
  }
}

export default createPaginationContainer(
  ProjectCommentReplyListContainer,
  {
    comment: graphql`
      fragment ProjectCommentReplyList_comment on ProjectComment {
        id
        replies(
          first: $repliesCount,
          after: $repliesCursor,
        ) @connection(key: "ProjectCommentReplyList_replies") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              ...ProjectCommentReplyListItem_comment
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps: props => (
      props.comment && props.comment.replies
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (props, { count, cursor }) => ({
      commentId: props.comment.id,
      repliesCount: count,
      repliesCursor: cursor,
    }),
    variables: { repliesCursor: null },
    query: graphql`
      query ProjectCommentReplyListPaginationQuery (
        $commentId: ID!,
        $repliesCount: Int!,
        $repliesCursor: String
      ) {
        projectComment(id: $commentId) {
          ...ProjectCommentReplyList_comment
        }
      }
    `,
  },
);
