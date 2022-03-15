import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const Header = props => {
  const {modalVisible, setModalVisible} = props;
  // const onPress = () => console.warn('Noooo');
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <TouchableOpacity
        style={styles.touch}
        // onPress={() => {
        //   setModalVisible(!modalVisible);
        //   console.warn('Noooo');
        // }}>
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
