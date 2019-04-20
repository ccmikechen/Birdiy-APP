/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { Surface } from 'react-native-paper';

import FileListItem from '../FileListItem';

import styles from './styles';

const FileList = ({
  files,
  onLinkPress,
}) => (
  files.length === 0 ? null : (
    <Surface style={styles.container}>
      {files.map((file, index) => (
        <FileListItem
          key={`file-${index}`}
          file={file}
          onLinkPress={onLinkPress}
        />
      ))}
    </Surface>
  )
);

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
  })).isRequired,
  onLinkPress: PropTypes.func,
};

FileList.defaultProps = {
  onLinkPress: () => {},
};

export default FileList;
