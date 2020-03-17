import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Left} from 'native-base';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  passWrapper: {
    marginTop: 15,
  },
  inputBox: {
    height: 40,
    width: windowWidth * 0.8,
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  iconWrapper: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 1,
    paddingLeft: 3,
    paddingRight: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  btndealer: {
    marginTop: 15,
    width: windowWidth * 0.8,
    height: 35,
    backgroundColor: '#ff5203',
    fontSize: 14,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
  },

  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
