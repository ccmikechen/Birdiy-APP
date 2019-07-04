import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationEvents } from 'react-navigation';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import PurchaseList from '../../components/PurchaseList';

import Cart from '../../helpers/cart';
import { showDeleteCartProjectAlert } from '../../helpers/alert';

export default class CartScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    projects: [],
  };

  cart = new Cart();

  handleWillFocus = async () => {
    const projects = await this.cart.reload();
    this.setState({ projects });
  };

  handleChange = async (newProject) => {
    const projects = await this.cart.updateProject(newProject);
    this.setState({ projects }, () => {
      const completed = newProject
        .materials
        .filter(material => !material.purchased).length === 0;
      if (completed) {
        this.handleDelete(newProject.id);
      }
    });
  };

  handleDelete = (id) => {
    const project = this.cart.getProject(id);

    showDeleteCartProjectAlert(project.name).then(async () => {
      const projects = await this.cart.deleteProject(id);
      this.setState({ projects });
    });
  };

  handleOpenProject = (id) => {
    const { navigation } = this.props;
    navigation.navigate('ProjectDetail', { id });
  };

  render() {
    const { navigation } = this.props;
    const { projects } = this.state;

    return (
      <TopScreenView
        {...this.props}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('cart.title')}
          />
        )}
        adType="admob"
      >
        <NavigationEvents
          onWillFocus={this.handleWillFocus}
        />
        <PurchaseList
          projects={projects}
          onChange={this.handleChange}
          onDelete={this.handleDelete}
          onOpenProject={this.handleOpenProject}
        />
      </TopScreenView>
    );
  }
}
