import { object, string, array } from 'yup';
import { isEqual } from 'lodash';
import i18n from 'i18n-js';

import video from '../helpers/video';

import { DEFAULT_METHOD } from '../constants/defaults';

export default (state) => {
  switch (state) {
    case 'published':
      return object({
        name: string().required().max(100),
        topic: string().nullable().required(),
        introduction: string().nullable().required().max(2000),
        source: string().url().nullable(),
        image: string().nullable().required(),
        video: string().nullable().test(
          'video',
          i18n.t('errors.video'),
          video.isValid,
        ),
        materials: array().of(object().shape({
          name: string().nullable().max(50).when(['amountUnit', 'url'], {
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
          name: string().nullable().max(50).when('url', {
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
          title: string().nullable().max(50),
          content: string().nullable().max(1000).when(['title', 'image'], {
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
        tip: string().nullable().max(1000),
      }).required();
    case 'draft':
    default:
      return object({
        name: string().required().max(100),
        topic: string().nullable().required(),
        introduction: string().nullable().max(2000),
        source: string().url().nullable(),
        image: string().nullable(),
        video: string().nullable().test(
          'video',
          i18n.t('errors.video'),
          video.isValid,
        ),
        materials: array().of(object().shape({
          name: string().nullable().max(50).when(['amountUnit', 'url'], {
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
          name: string().nullable().max(50).when('url', {
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
          title: string().nullable().max(50),
          content: string().nullable().max(1000).when(['title', 'image'], {
            is: (title, image) => (title || image),
            then: string().required(),
          }),
          image: string().nullable(),
        }, ['title', 'content', 'image'])),
        tip: string().nullable().max(1000),
      }).required();
  }
};
