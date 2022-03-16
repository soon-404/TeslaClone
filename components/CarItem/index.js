import React from 'react';
import {Text, View, ImageBackground, Dimensions, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = props => {
  const {name, tagline, taglineCTA, image} = props.car;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height:
          Dimensions.get('screen').height -
          insets.bottom -
          StatusBar.currentHeight -
          insets.top,
      }}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleTCA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={'Custom Order'}
          onPress={() => {
            console.warn('Custom order was pressed');
          }}
        />
        <StyledButton
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {
            console.warn('Existing Inventory');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
