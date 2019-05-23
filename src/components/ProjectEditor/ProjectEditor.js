import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Formik } from 'formik';
import i18n from 'i18n-js';

import TabsPager from '../TabsPager';
import ProjectIntroEditor from '../ProjectIntroEditor';
import ProjectImageEditor from '../ProjectImageEditor';
import ProjectMaterialEditor from '../ProjectMaterialEditor';
import ProjectFileEditor from '../ProjectFileEditor';
import ProjectMethodEditor from '../ProjectMethodEditor';
import ProjectTipEditor from '../ProjectTipEditor';

import editProjectValidation from '../../validations/editProjectValidation';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

export default class ProjectEditor extends Component {
  static propTypes = {
    initialValues: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      published: PropTypes.bool,
      image: PropTypes.string,
      category: PropTypes.string,
      tip: PropTypes.string,
      materials: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        amountUnit: PropTypes.string,
        url: PropTypes.string,
      })),
      fileResources: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        type: PropTypes.string,
      })),
      methods: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
      })),
    }),
    categories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    onOpenCategorySelector: PropTypes.func,
    onSubmit: PropTypes.func,
    published: PropTypes.bool,
  };

  static defaultProps = {
    initialValues: null,
    categories: [],
    onOpenCategorySelector: () => {},
    onSubmit: () => {},
    published: false,
  };

  state = {
    tabIndex: 0,
    projectStatus: 'draft',
  };

  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0,
      projectStatus: props.published ? 'published' : 'draft',
    };
  }

  handleChangeTab = (index) => {
    this.setState({ tabIndex: index });
  };

  bindSubmit = (submitForm) => {
    this.submit = (projectStatus) => {
      this.setState({ projectStatus }, () => {
        submitForm();
      });
    };
  };

  render() {
    const {
      initialValues,
      onSubmit,
      categories,
      onOpenCategorySelector,
    } = this.props;
    const { tabIndex, projectStatus } = this.state;

    const tabs = [{
      key: 'intro', title: i18n.t('tabs.intro', i18nOptions),
    }, {
      key: 'image', title: i18n.t('tabs.image', i18nOptions),
    }, {
      key: 'material', title: i18n.t('tabs.materials', i18nOptions),
    }, {
      key: 'files', title: i18n.t('tabs.files', i18nOptions),
    }, {
      key: 'method', title: i18n.t('tabs.methods', i18nOptions),
    }, {
      key: 'tip', title: i18n.t('tabs.tip', i18nOptions),
    }];

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit(projectStatus)}
        validationSchema={editProjectValidation(projectStatus)}
      >
        {(props) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            submitForm,
          } = props;

          const sectionProps = {
            project: values,
            onChange: handleChange,
            errors,
            touched,
          };

          this.bindSubmit(submitForm);

          return (
            <TabsPager
              tabs={tabs}
              tabsScrollable
              onChangeTab={this.handleChangeTab}
              tabIndex={tabIndex}
            >
              <View style={styles.section}>
                <ProjectIntroEditor
                  {...sectionProps}
                  categories={categories}
                  onSelectCategoryPress={onOpenCategorySelector}
                />
              </View>
              <View style={styles.section}>
                <ProjectImageEditor {...sectionProps} />
              </View>
              <View style={styles.section}>
                <ProjectMaterialEditor {...sectionProps} />
              </View>
              <View style={styles.section}>
                <ProjectFileEditor {...sectionProps} />
              </View>
              <View style={styles.section}>
                <ProjectMethodEditor {...sectionProps} />
              </View>
              <View style={styles.section}>
                <ProjectTipEditor {...sectionProps} />
              </View>
            </TabsPager>
          );
        }}
      </Formik>
    );
  }
}
