import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  passWrapper: {
    marginTop: 15,
  },
  labelStyle: {
    width: windowWidth * 0.9,
  },

  alertLabelStyle: {
    width: windowWidth * 0.9,
    borderColor: '#ff0000',
    borderWidth: 1,
  },
  inputBox: {
    height: 50,
    width: windowWidth * 0.9,
    backgroundColor: '#fff',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    paddingLeft: 10,
  },

  alertInputBox: {
    height: 50,
    width: windowWidth * 0.9,
    backgroundColor: '#fff',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderColor: '#ff0000',
    borderWidth: 1,
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
  btnsigup: {
    marginTop: 30,
    width: windowWidth * 0.8,
    height: 35,
    backgroundColor: '#ff5203',
    fontSize: 16,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
  },

  btnsigin: {
    marginTop: 30,
    width: windowWidth * 0.8,
    height: 35,
    backgroundColor: '#ff5203',
    fontSize: 16,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
  },

  btnlogin: {
    marginTop: 30,
    marginLeft: 500,
    marginRight: 500,
    width: windowWidth * 0.9,
    height: 40,
    backgroundColor: '#ff5203',
    fontSize: 16,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
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
