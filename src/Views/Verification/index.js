import React, {Component} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {AsyncStorage, View, Button, Image, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {StackActions, NavigationActions} from 'react-navigation';
import styles from './styles';
class Verification extends Component {
  FunctionToConfirm = () => {
    this.props.navigation.navigate('Menu');
  };
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../Images/normal.jpeg')}>
        <View style={styles.container}>
          <Image
            style={{
              marginTop: 20,
              height: 130,
              resizeMode: 'contain',
              width: 250,
            }}
            source={require('../../Images/Personal-Assistance.jpg')}
          />
        </View>
        <View style={{flex: 2, height: 20, padding: 30}}>
          <OTPInputView
            style={{width: '100%', height: 100}}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
          />
          <View
            style={{
              width: 300,
              height: 100,
              padding: 20,
            }}>
            <Button
              title="Resend"
              style={styles.btndealer}
              onPress={this.FunctionToLogin}
              textStyle={styles.textStyle}></Button>
            <View style={{padding: 10}} />
            <Button
              title="Confirm"
              style={styles.btndealer}
              onPress={this.FunctionToConfirm}
              textStyle={styles.textStyle}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Verification;
