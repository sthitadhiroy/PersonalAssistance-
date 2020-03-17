import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    //‘powderblue’,‘skyblue’,‘steelblue’
    borderColor: 'black',
    //paddingBottom:5,
    paddingTop: 5,
    marginLeft: 20,
  },
  labelStyle: {
    width: windowWidth * 0.9,
  },
  alertLabelStyle: {
    width: windowWidth * 0.9,
    borderColor: '#ff0000',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  passWrapper: {
    marginTop: 10,
  },
  inputBox: {
    height: 20,
    width: windowWidth * 0.7,
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  alertInputBox: {
    height: 40,
    width: windowWidth * 0.9,
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
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
  btnsignupp: {
    marginTop: 30,
    width: windowWidth * 0.9,
    backgroundColor: '#ff5203',
    height: 35,
    fontSize: 16,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
  },

  btnsubmit: {
    marginTop: 30,
    width: windowWidth * 0.9,
    backgroundColor: '#ff5203',
    height: 95,
    fontSize: 16,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
  },

  text: {
    color: '#41cdf4',
    fontWeight: '800',
  },
  capitalLetter: {
    color: 'red',
    fontSize: 20,
  },
  wordBold: {
    fontWeight: 'bold',
    color: 'black',
  },
  italicText: {
    color: '#37859b',
    fontStyle: 'italic',
  },
  textShadow: {
    textShadowColor: 'red',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  UnderLineTextStyle: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: 'red',
    fontWeight: 'bold',
    marginLeft: -50,
  },
});

export default styles;
