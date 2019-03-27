import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import EditSection from '../../components/EditSection';
import PureTextInput from '../../components/PureTextInput';
import PureSelector from '../../components/PureSelector';

import styles from './styles';

export default class CreateProjectScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    projectName: '',
    category: null,
  };

  handleSubmit = () => {

  };

  render() {
    const { navigation } = this.props;
    const { projectName, category } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="建立專案"
            rightButton={{
              icon: 'save',
              color: '#666666',
            }}
          />
        )}
      >
        <ScrollView style={styles.container}>
          <EditSection title="專案名稱">
            <PureTextInput
              value={projectName}
              placeholder="輸入你的專案名稱"
              onChangeText={value => this.setState({ projectName: value })}
              maxLength={20}
              counter
            />
          </EditSection>
          <EditSection title="分類">
            <PureSelector
              placeholder="選擇你的專案分類"
              value={category}
            />
          </EditSection>
          <View style={styles.submitButtonContainer}>
            <Button
              style={styles.submitButton}
              mode="contained"
              onPress={this.handleSubmit}
            >
              <Text style={styles.submitButtonText}>儲存並繼續編輯</Text>
            </Button>
          </View>
        </ScrollView>
      </TopScreenView>
    );
  }
}
