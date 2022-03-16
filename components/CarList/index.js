import React from 'react';
import {View, FlatList, Dimensions, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import CarItem from '../CarItem';
import cars from './cars';
import styles from './styles';

const CarList = props => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment={'Start'}
        decelerationRate={'fast'}
        snapToInterval={
          Dimensions.get('screen').height -
          insets.bottom -
          StatusBar.currentHeight -
          insets.top
        }
        showsVerticalScrollIndicator={false}
        style={{flexGrow: 1}}
      />
    </View>
  );
};

export default CarList;
