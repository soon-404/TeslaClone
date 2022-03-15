import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  modalBox: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  closeIcon: {
    borderRadius: 100,
    backgroundColor: 'red',
    color: 'white',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    top: 15,
  },
  x: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    borderRadius: 20,
    marginTop: 20,
  },
});
export default styles;
