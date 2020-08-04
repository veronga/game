import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '80%',
    height: 60,
    backgroundColor: '#7DB715',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row',

  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 0,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  imageStyle: {
    width: 42,
    height: 42,
    left: 20,
    alignSelf: 'center',
  },
});
