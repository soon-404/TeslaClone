import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 130,
    height: 30,
    resizeMode: 'contain',
  },
  menu: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  touch: {},
});
export default styles;
