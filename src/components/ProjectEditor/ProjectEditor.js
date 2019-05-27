/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
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
      topic: PropTypes.string,
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
    onOpenTopicSelector: PropTypes.func,
    onSubmit: PropTypes.func,
    published: PropTypes.bool,
  };

  static defaultProps = {
    initialValues: null,
    onOpenTopicSelector: () => {},
    onSubmit: () => {},
    published: false,
  };

  state = {
    tabIndex: 0,
    projectStatus: 'draft',
  };

  tabFields = [
    ['name', 'topic', 'introduction'],
    ['image'],
    ['materials'],
    ['files'],
    ['methods'],
    ['tip'],
  ];

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

  getTabErrors = (touched, errors) => (
    this.tabFields.map(fields => (
      fields.filter(field => (
        touched[field] && errors[field]
      )).length > 0
    ))
  );

  render() {
    const {
      initialValues,
      onSubmit,
      onOpenTopicSelector,
    } = this.props;
    const { tabIndex, projectStatus } = this.state;

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

          const tabErrors = this.getTabErrors(touched, errors);
          const tabs = [
            i18n.t('tabs.intro', i18nOptions),
            i18n.t('tabs.image', i18nOptions),
            i18n.t('tabs.materials', i18nOptions),
            i18n.t('tabs.files', i18nOptions),
            i18n.t('tabs.methods', i18nOptions),
            i18n.t('tabs.tip', i18nOptions),
          ].map((tab, index) => {
            const style = [
              styles.tab,
              index === tabIndex ? styles.currentTab : null,
              index !== tabIndex && tabErrors[index] ? styles.errorTab : null,
            ];

            return (
              <Text key={`tab-${index}`} style={style}>{tab}</Text>
            );
          });

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
                  onSelectTopicPress={onOpenTopicSelector}
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
