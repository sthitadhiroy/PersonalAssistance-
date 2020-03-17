import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: 'transparent',
  },
  passWrapper: {
    marginTop: 15,
  },
  inputBox: {
    height: 40,
    width: windowWidth * 0.7,
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

  btn: {
    marginTop: 30,
    width: windowWidth * 0.9,
    height: 30,
    backgroundColor: '#ffb6c1',
    fontSize: 16,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default styles;
