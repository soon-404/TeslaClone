import React, {useState} from 'react';
import {Text, View, Image, Modal, Pressable} from 'react-native';

import styles from './styles';

const ModalPop = props => {
  // const [modalVisible, setModalVisible] = useState(true);
  const {modalVisible, setModalVisible} = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Image
            source={require('../../assets/images/doge.jpg')}
            style={styles.image}
          />
          <Pressable
            style={styles.closeIcon}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.x}>X</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPop;
