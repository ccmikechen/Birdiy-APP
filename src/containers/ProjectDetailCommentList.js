import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, createPaginationContainer } from 'react-relay';
import i18n from 'i18n-js';

import ProjectDetailSection from '../components/ProjectDetailSection';
import ProjectCommentList from '../components/ProjectCommentList';

class ProjectDetailCommentList extends Component {
  static propTypes = {
    project: PropTypes.shape({
      comments: PropTypes.shape({
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
    const { project, relay } = this.props;
    const comments = project.comments.edges.map(({ node }) => node);

    return comments.length === 0 ? null : (
      <ProjectDetailSection
        title={i18n.t('project.sections.comments.title')}
        style={{
          marginTop: 10,
        }}
      >
        <ProjectCommentList
          comments={comments}
          canLoadMore={relay.hasMore()}
          loadMore={this.loadMore}
        />
      </ProjectDetailSection>
    );
  }
}

export default createPaginationContainer(
  ProjectDetailCommentList,
  {
    project: graphql`
      fragment ProjectDetailCommentList_project on Project {
        comments(
          first: $commentsCount,
          after: $commentsCursor,
        ) @connection(key: "ProjectDetailCommentList_comments") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              ...ProjectCommentListItem_comment
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps: props => (
      props.project && props.project.comments
    ),
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (props, { count, cursor }) => ({
      projectId: props.projectId,
      commentsCount: count,
      commentsCursor: cursor,
    }),
    variables: { commentsCursor: null },
    query: graphql`
      query ProjectDetailCommentListPaginationQuery (
        $projectId: ID!,
        $commentsCount: Int!,
        $commentsCursor: String
      ) {
        project(id: $projectId) {
          ...ProjectDetailCommentList_project
        }
      }
    `,
  },
);
