import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Dimensions,
} from 'react-native';

import TabSectionScreenView from '../../components/TabSectionScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ImageUploadView from '../../components/ImageUploadView';
import EditSection from '../../components/EditSection';
import PureTextInput from '../../components/PureTextInput';
import PureSelector from '../../components/PureSelector';
import EditMaterialList from '../../components/EditMaterialList';
import EditFileList from '../../components/EditFileList';

import styles from './styles';

import { categories } from './mocks';

const TABS = [{
  key: 'intro', title: '簡介',
}, {
  key: 'material', title: '材料',
}, {
  key: 'method', title: '作法',
}, {
  key: 'tip', title: '小技巧',
}];

export default class EditProjectScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    projectName: '',
    categoryIndex: null,
    introduction: '',
    tip: '',
    materials: [{ name: '', amount: '', link: '' }],
    files: [{ type: 'external', name: '', link: 'http://' }],
  };

  handleSelectCategory = (index) => {
    this.setState({ categoryIndex: index });
  };

  handleSelecteCategoryPress = () => {
    const { navigation } = this.props;
    navigation.navigate('SelectCategoryModal', {
      categories,
      onSelect: this.handleSelectCategory,
    });
  };

  handleMaterialChange = (materials) => {
    this.setState({ materials });
  };

  handleFileChange = (files) => {
    this.setState({ files });
  };

  handleSubmit = () => {
  };

  renderSection = (key) => {
    const {
      projectName,
      categoryIndex,
      introduction,
      tip,
      materials,
      files,
    } = this.state;
    const category = categories[categoryIndex] && categories[categoryIndex].name;

    switch (key) {
      case 'intro':
        return (
          <View style={styles.section}>
            <ImageUploadView
              width="100%"
              aspectRatio={1}
              iconSize={Dimensions.get('window').width / 2}
            />
            <EditSection title="專案名稱">
              <PureTextInput
                style={styles.textInput}
                value={projectName}
                placeholder="輸入你的專案名稱"
                onChangeText={value => this.setState({ projectName: value })}
                maxLength={20}
                counter
              />
            </EditSection>
            <EditSection title="分類">
              <PureSelector
                style={styles.textInput}
                placeholder="選擇你的專案分類"
                value={category}
                onPress={this.handleSelecteCategoryPress}
              />
            </EditSection>
            <EditSection title="介紹">
              <PureTextInput
                style={styles.textInput}
                value={tip}
                placeholder="介紹你的專案"
                onChangeText={value => this.setState({ tip: value })}
                maxLength={300}
                multiline
                counter
              />
            </EditSection>
          </View>
        );
      case 'material':
        return (
          <View style={styles.section}>
            <EditSection title="材料">
              <EditMaterialList
                data={materials}
                onChange={this.handleMaterialChange}
              />
            </EditSection>
            <EditSection title="檔案資料">
              <EditFileList
                data={files}
                onChange={this.handleFileChange}
              />
            </EditSection>
          </View>
        );
      case 'method':
        return (
          <View style={styles.section}>
            <EditSection title="作法" />
          </View>
        );
      case 'tip':
        return (
          <View style={styles.section}>
            <EditSection title="小技巧">
              <PureTextInput
                style={styles.textInput}
                value={introduction}
                placeholder="（可選）分享跟著做的一些小技巧及需要注意的地方"
                onChangeText={value => this.setState({ introduction: value })}
                maxLength={300}
                multiline
                counter
              />
            </EditSection>
          </View>
        );
      default:
        return null;
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <TabSectionScreenView
        navigation={navigation}
        tabs={TABS}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="編輯專案"
            rightButton={{
              icon: 'save',
              color: '#666666',
            }}
          />
        )}
        renderSection={this.renderSection}
        fullScreen
      />
    );
  }
}
