import React from 'react';
import {Modal, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function ModalList({children, isShowModal}) {
  const {container} = styles;
  return (
    <Modal animationType="slide" visible={isShowModal} transparent>
      <View style={container}>{children}</View>
    </Modal>
  );
}

ModalList.propTypes = {
  isShowModal: PropTypes.bool,
  toggleModal: PropTypes.func,
  children: PropTypes.object,
};
