import React, {useState} from 'react';
import {StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';

import CarList from './components/CarList';
import Header from './components/Header';
import ModalPop from './components/ModalPop';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerr}>
        <ModalPop
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <CarList />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerr: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default App;
