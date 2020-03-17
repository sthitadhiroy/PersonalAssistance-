import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  AsyncStorage,
  View,
  Button,
  TextInput,
  Text,
  Linking,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Container, Header, Left, Right, Body, Title} from 'native-base';

import styles from './styles';

class Landing extends Component {
  FunctionToLogin = () => {
    this.props.navigation.navigate('Login');
  };
  FunctionToRegister = () => {
    this.props.navigation.navigate('Registration');
  };

  render() {
    return (
      <ImageBackground
        source={require('../../Images/normal.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <Container
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginTop: 20,
              height: 100,
              resizeMode: 'contain',
              width: 250,
            }}
            source={require('../../Images/Personal-Assistance.jpg')}
          />
          <View style={{padding: 10}} />
          <View
            style={{
              width: 300,
              height: 500,
              marginTop: 150,
            }}>
            <Button
              title="Sign In"
              style={styles.btndealer}
              onPress={this.FunctionToLogin}
              textStyle={styles.textStyle}></Button>
            <View style={{padding: 10}} />
            <Button
              title="Sign Up"
              style={styles.btndealer}
              onPress={this.FunctionToRegister}
              textStyle={styles.textStyle}
            />
          </View>
        </Container>
      </ImageBackground>
    );
  }
}

export default Landing;
