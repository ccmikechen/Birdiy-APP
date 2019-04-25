import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Dimensions,
  Alert,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import { clone, cloneDeep } from 'lodash';

import TabSectionScreenView from '../../components/TabSectionScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ImageUploadView from '../../components/ImageUploadView';
import EditSection from '../../components/EditSection';
import PureTextInput from '../../components/PureTextInput';
import PureSelector from '../../components/PureSelector';
import EditMaterialList from '../../components/EditMaterialList';
import EditFileList from '../../components/EditFileList';
import EditMethodList from '../../components/EditMethodList';

import { ImageFile, DocumentFile } from '../../helpers/formFile';
import EditProjectMutation from '../../mutations/EditProjectMutation';

import styles from './styles';

const TABS = [{
  key: 'intro', title: '簡介',
}, {
  key: 'material', title: '材料',
}, {
  key: 'method', title: '作法',
}, {
  key: 'tip', title: '小技巧',
}];
const DEFAULT_MATERIAL = { name: '', amountUnit: '', url: '' };
const DEFAULT_FILE = { type: 'link', name: '', url: '' };
const DEFAULT_METHOD = { image: null, title: '', content: '' };

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
    query: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      category: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      tip: PropTypes.string,
      materials: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        amountUnit: PropTypes.string.isRequired,
        url: PropTypes.string,
      })),
      fileResources: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })),
      methods: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string.isRequired,
      })),
      categories: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            image: PropTypes.string,
          }),
        })),
      }),
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  state = {
    initialized: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { query } = nextProps;
    const { initialized } = prevState;

    if (!query || initialized) {
      return null;
    }

    const { project, categories } = query;
    const categoryIndex = categories.edges.reduce((
      acc, { node: { name } }, index,
    ) => (
      name === project.category.name ? index : acc
    ), null);

    return {
      initialized: true,
      projectImage: project.image,
      projectName: project.name,
      categoryIndex,
      introduction: project.introduction || '',
      tip: project.tip || '',

      materials: project.materials.length > 0
        ? cloneDeep(project.materials)
        : [clone(DEFAULT_MATERIAL)],

      files: project.fileResources.length > 0
        ? cloneDeep(project.fileResources)
        : [clone(DEFAULT_FILE)],

      methods: project.methods.length > 0
        ? cloneDeep(project.methods)
        : [clone(DEFAULT_METHOD)],
    };
  }

  handleImageUpload = (image) => {
    this.setState({ projectImage: image.uri });
  };

  handleSelectCategory = (index) => {
    this.setState({ categoryIndex: index });
  };

  handleSelecteCategoryPress = () => {
    const { navigation } = this.props;

    navigation.navigate('SelectCategoryModal', {
      categories: this.getCategories(),
      onSelect: this.handleSelectCategory,
    });
  };

  handleMaterialChange = (materials) => {
    this.setState({ materials });
  };

  handleFileChange = (files) => {
    this.setState({ files });
  };

  handleMethodChange = (methods) => {
    this.setState({ methods });
  };

  handleDelete = () => {
    Alert.alert(
      '刪除專案',
      '專案一旦刪除則無法手動復原，確定要刪除專案嗎？',
      [
        { text: '取消' },
        { text: '確定', onPress: this.deleteProject },
      ],
    );
  };

  deleteProject = () => {
    const { navigation } = this.props;
    navigation.goBack();
    Alert.alert(
      '專案刪除成功',
      '專案已成功刪除，若要復原請聯繫客服人員。',
    );
  };

  handleSave = () => {
    const mutation = this.getEditProjectMutation();

    mutation.commit()
      .catch(() => {});
  };

  getEditProjectMutation = () => {
    const { navigation } = this.props;
    const {
      projectImage,
      projectName,
      introduction,
      tip,
      materials,
      files,
      methods,
    } = this.state;

    return new EditProjectMutation({
      id: navigation.getParam('id'),
      name: projectName,
      category: this.getCategory(),
      introduction,
      tip,
      ...((projectImage)
          && (projectImage.startsWith('file://'))
          && ({ image: new ImageFile(projectImage) })),
      materials: materials.map((material, index) => ({
        ...material,
        order: index + 1,
      })),
      fileResources: files.map((file, index) => ({
        id: file.id,
        name: file.name,
        ...((file.type === 'link') && ({ url: file.url })),
        ...((file.type === 'file')
            && (file.url.startsWith('file://'))
            && ({ file: new DocumentFile(file.url, file.name, file.localFileName) })),
        order: index + 1,
      })),
      methods: methods.map((method, index) => ({
        id: method.id,
        title: method.title,
        content: method.content,
        ...((method.image)
            && (method.image.startsWith('file://'))
            && ({ image: new ImageFile(method.image) })),
        order: index + 1,
      })),
    });
  };

  handlePublish = () => {
  };

  renderSection = (key) => {
    const {
      projectImage,
      projectName,
      introduction,
      tip,
      materials,
      files,
      methods,
    } = this.state;
    const category = this.getCategory();

    switch (key) {
      case 'intro':
        return (
          <View style={styles.section}>
            <ImageUploadView
              width="100%"
              aspect={[1, 1]}
              iconSize={Dimensions.get('window').width / 2}
              image={projectImage}
              onUpload={this.handleImageUpload}
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
                value={introduction}
                placeholder="介紹你的專案"
                onChangeText={value => this.setState({ introduction: value })}
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
            <EditSection title="作法">
              <EditMethodList
                data={methods}
                onChange={this.handleMethodChange}
              />
            </EditSection>
          </View>
        );
      case 'tip':
        return (
          <View style={styles.section}>
            <EditSection title="小技巧">
              <PureTextInput
                style={styles.textInput}
                value={tip}
                placeholder="（可選）分享跟著做的一些小技巧及需要注意的地方"
                onChangeText={value => this.setState({ tip: value })}
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

  renderFooter = () => (
    <View style={styles.footerContainer}>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.submitButton}
          mode="contained"
          onPress={this.handleSave}
        >
          <Text style={styles.submitButtonText}>儲存</Text>
        </Button>
        <Button
          style={[styles.submitButton, styles.publishButton]}
          mode="contained"
          onPress={this.handlePublish}
        >
          <Text style={styles.submitButtonText}>公開</Text>
        </Button>
      </View>
    </View>
  );

  getCategories = () => {
    const { query } = this.props;

    return query && query.categories.edges.map(({ node }) => node);
  };

  getCategory = () => {
    const { categoryIndex } = this.state;
    const categories = this.getCategories();
    return (categories
            && categories[categoryIndex]
            && categories[categoryIndex].name) || null;
  };

  render() {
    const { navigation, loading } = this.props;

    return (
      <TabSectionScreenView
        navigation={navigation}
        tabs={TABS}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="編輯專案"
            rightButton={[{
              icon: 'delete',
              color: '#666666',
              onPress: this.handleDelete,
            }, {
              icon: 'save',
              color: '#666666',
              onPress: this.handleSave,
            }]}
          />
        )}
        renderSection={this.renderSection}
        renderFooter={this.renderFooter}
        fullScreen
        loading={loading}
      />
    );
  }
}
