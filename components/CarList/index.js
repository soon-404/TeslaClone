import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';

import CarItem from '../CarItem';
import cars from './cars';
import styles from './styles';

const CarList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment={'Start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;
