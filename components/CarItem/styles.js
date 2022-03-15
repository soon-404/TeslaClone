import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  titles: {alignItems: 'center', marginTop: '20%', width: '100%'},
  title: {fontSize: 40, fontWeight: 'bold'},
  subtitle: {fontSize: 15},

  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  subtitleTCA: {
    textDecorationLine: 'underline',
  },
});
export default styles;
