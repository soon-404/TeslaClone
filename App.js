import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import CarList from './components/CarList';
import Header from './components/Header';
import ModalPop from './components/ModalPop';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerSave}>
        <View style={styles.containerView}>
          <ModalPop
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <Header
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <CarList />
          {/* <StatusBar style="auto" /> */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  containerSave: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rr#fff',
    alignItems: 'center',
  },
  containerView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default App;
