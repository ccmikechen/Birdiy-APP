import * as mime from 'react-native-mime-types';

export class FormFile {
  getFormData() { // eslint-disable-line class-methods-use-this
    throw new Error('Not implemented');
  }
}

export class ImageFile extends FormFile {
  static parseURI(uri, field) {
    return uri && uri.startsWith('file://') && ({
      [field]: new ImageFile(uri),
    });
  }

  constructor(uri, name) {
    super();
    this.uri = uri;
    this.name = name;
  }

  getFormData() {
    const { uri, name } = this;
    const uriParts = uri.split('.');
    const ext = uriParts[uriParts.length - 1];

    return {
      uri,
      name: name || `photo.${ext}`,
      type: `image/${ext}`,
    };
  }
}

export class DocumentFile extends FormFile {
  constructor(uri, name, type) {
    super();
    this.uri = uri;
    this.name = name;
    this.type = type;
  }

  getFormData() {
    const { uri, name, type } = this;
    const ext = type.split('.')[1];
    const fileName = `file.${ext}`;
    const contentType = mime.lookup(type) || mime.lookup(name) || 'text/plain';

    return {
      uri,
      name: fileName,
      type: contentType,
    };
  }
}
