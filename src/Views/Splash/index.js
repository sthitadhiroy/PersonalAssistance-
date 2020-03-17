import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AsyncStorage, View, Image, ImageBackground} from 'react-native';

import ReactTimeout from 'react-timeout';
import {StackActions, NavigationActions} from 'react-navigation';

import styles from './styles';

const SPLASH_TIMEOUT = 4000;

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Landing');
    }, SPLASH_TIMEOUT);
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../Images/splash.jpg')}>
        <View style={styles.container}>
          <Image
            style={{
              marginTop: 20,
              height: 200,
              resizeMode: 'contain',
              width: 250,
            }}
            source={require('../../Images/Personal-Assistance.jpg')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Splash;
