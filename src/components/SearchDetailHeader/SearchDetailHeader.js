import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import styles from './styles';

export default class SearchDetailHeader extends Component {
  static propTypes = {
    onBack: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    placeholder: '',
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
    const { onBack, placeholder } = this.props;

    return (
      <BasicHeader
        placement="center"
        leftButton={{
          icon: 'arrow-back',
          onPress: onBack,
        }}
        centerComponent={() => (
          <Searchbar
            ref={(searchBar) => { this.searchBar = searchBar; }}
            style={styles.searchBar}
            placeholder={placeholder}
            onChangeText={text => this.setState({ inputText: text })}
            onSubmitEditing={this.handleSubmit}
          />
        )}
      />
    );
  }
}
