import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import CarList from './components/CarList';
import Header from './components/Header';
import ModalPop from './components/ModalPop';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ModalPop modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default App;
