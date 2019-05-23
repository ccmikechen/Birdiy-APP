import { isEqual } from 'lodash';

import { ImageFile, DocumentFile } from './formFile';

import {
  DEFAULT_MATERIAL,
  DEFAULT_FILE,
  DEFAULT_METHOD,
} from '../constants/defaults';

export const parseMaterials = materials => (
  materials.filter(material => (
    !isEqual(material, DEFAULT_MATERIAL)
  )).map((material, index) => ({
    ...material,
    order: index + 1,
  }))
);

export const parseFiles = files => (
  files.filter(file => (
    !isEqual(file, DEFAULT_FILE)
  )).map((file, index) => ({
    id: file.id,
    name: file.name,
    ...((file.type === 'link') && ({ url: file.url })),
    ...((file.type === 'file')
        && (file.url.startsWith('file://'))
        && ({ file: new DocumentFile(file.url, file.name, file.localFileName) })),
    order: index + 1,
  }))
);

export const parseMethods = methods => (
  methods.filter(method => (
    !isEqual(method, DEFAULT_METHOD)
  )).map((method, index) => ({
    id: method.id,
    title: method.title,
    content: method.content,
    ...(ImageFile.parseURI(method.image, 'image')),
    order: index + 1,
  }))
);
