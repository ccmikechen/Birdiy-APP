import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import styles from './styles';

export default class SearchDetailHeader extends Component {
  static propTypes = {
    onBack: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    inputText: '',
  };

  focusSearchBar = () => {
    this.searchBar.focus();
  };

  handleSubmit = () => {
    const { onSearch } = this.props;
    const { inputText } = this.state;
    onSearch(inputText);
  };

  render() {
    const { onBack } = this.props;

    return (
      <BasicHeader
        placement="center"
        leftButton={{
          icon: 'arrow-back',
          color: '#ffffff',
          onPress: onBack,
        }}
        centerComponent={() => (
          <Searchbar
            ref={(searchBar) => { this.searchBar = searchBar; }}
            style={styles.searchBar}
            placeholder="找作法、材料"
            onChangeText={text => this.setState({ inputText: text })}
            onSubmitEditing={this.handleSubmit}
          />
        )}
      />
    );
  }
}
