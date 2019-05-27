import { object, string, array } from 'yup';
import { isEqual } from 'lodash';
import i18n from 'i18n-js';

import { DEFAULT_METHOD } from '../constants/defaults';

export default (state) => {
  switch (state) {
    case 'published':
      return object({
        name: string().required().max(20),
        topic: string().nullable().required(),
        introduction: string().nullable().required().max(300),
        image: string().nullable().required(),
        materials: array().of(object().shape({
          name: string().nullable().max(20).when(['amountUnit', 'url'], {
            is: (amountUnit, url) => (amountUnit || url),
            then: string().required(),
          }),
          amountUnit: string().nullable().max(20).when(['name', 'url'], {
            is: (name, url) => (name || url),
            then: string().required(),
          }),
          url: string().url().nullable(),
        }, ['name', 'amountUnit', 'url'])),
        files: array().of(object().shape({
          name: string().nullable().max(20).when('url', {
            is: url => url,
            then: string().required(),
          }),
          url: string().nullable().when('name', {
            is: name => name,
            then: string().required(),
          }).when('type', {
            is: 'link',
            then: string().url(),
          }),
        }, ['url', 'name'])),
        methods: array().of(object().shape({
          title: string().nullable().max(20),
          content: string().nullable().max(300).when(['title', 'image'], {
            is: (title, image) => (title || image),
            then: string().required(),
          }),
          image: string().nullable(),
        }, ['title', 'content', 'image']))
          .test('notEmpty', i18n.t('errors.methods.notEmpty'), methods => (
            methods
              .filter(method => !isEqual(method, DEFAULT_METHOD))
              .length > 0
          )),
        tip: string().nullable().max(300),
      }).required();
    case 'draft':
    default:
      return object({
        name: string().required().max(20),
        topic: string().nullable().required(),
        introduction: string().nullable().max(300),
        image: string().nullable(),
        materials: array().of(object().shape({
          name: string().nullable().max(20).when(['amountUnit', 'url'], {
            is: (amountUnit, url) => (amountUnit || url),
            then: string().required(),
          }),
          amountUnit: string().nullable().max(20).when(['name', 'url'], {
            is: (name, url) => (name || url),
            then: string().required(),
          }),
          url: string().url().nullable(),
        }, ['name', 'amountUnit', 'url'])),
        files: array().of(object().shape({
          name: string().nullable().max(20).when('url', {
            is: url => url,
            then: string().required(),
          }),
          url: string().nullable().when('name', {
            is: name => name,
            then: string().required(),
          }).when('type', {
            is: 'link',
            then: string().url(),
          }),
        }, ['url', 'name'])),
        methods: array().of(object().shape({
          title: string().nullable().max(20),
          content: string().nullable().max(300).when(['title', 'image'], {
            is: (title, image) => (title || image),
            then: string().required(),
          }),
          image: string().nullable(),
        }, ['title', 'content', 'image'])),
        tip: string().nullable().max(300),
      }).required();
  }
};
