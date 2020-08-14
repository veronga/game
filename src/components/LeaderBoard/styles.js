import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '75%',
    height: 60,
    backgroundColor: '#F8F8F9',
    borderColor: '#000',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderTop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  borderBottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomWidth: 0
  },
  containerPoint: {
    width: 45,
    height: 45,
    backgroundColor: '#E569C0',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    right: 20,
  },
  stylesText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: '#000',
    alignSelf: 'center',
  },
  stylesPoint: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});
