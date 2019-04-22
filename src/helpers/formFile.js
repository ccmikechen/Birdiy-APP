export class FormFile {
  getFormData() { // eslint-disable-line class-methods-use-this
    throw new Error('Not implemented');
  }
}

export class ImageFile extends FormFile {
  constructor(uri, name) {
    super();
    this.uri = uri;
    this.name = name;
  }

  getFormData() {
    const { uri, name } = this;
    const uriParts = uri.split('.');
    const fileType = uriParts[uriParts.length - 1];

    return {
      uri,
      name: name || `photo.${fileType}`,
      type: `image/${fileType}`,
    };
  }
}
