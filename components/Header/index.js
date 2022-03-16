import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Header = props => {
  const {modalVisible, setModalVisible} = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <TouchableOpacity
        style={styles.touch}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.menu}
          source={require('../../assets/images/menu.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
