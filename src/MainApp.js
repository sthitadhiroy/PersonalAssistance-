import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import Splash from './Views/Splash/index';
import Landing from './Views/Landing/index';
import Login from './Views/Login/index';
import Registration from './Views/Registration/index';
import Verification from './Views/Verification/index';
import Menu from './Views/Menu/index';
import Flight from './Views/Flight/index';
import Taxi from './Views/Taxi/index';
import ConfirmFlight from './Views/ConfirmFlight/index';
import ConfirmTaxi from './Views/ConfirmTaxi/index';
const navigationOptions = {header: null};

const unauthorizedStack = createStackNavigator(
  {
    Splash: {screen: Splash, navigationOptions},
  },
  {
    initialRouteName: 'Splash',
    navigationOptions,
  },
);

const landingStack = createStackNavigator(
  {
    Landing: {screen: Landing, navigationOptions},
  },
  {
    initialRouteName: 'Landing',
    navigationOptions,
  },
);

const logInStack = createStackNavigator(
  {
    Login: {screen: Login, navigationOptions},
  },
  {
    initialRouteName: 'Login',
    navigationOptions,
  },
);

const registrationStack = createStackNavigator(
  {
    Registration: {screen: Registration, navigationOptions},
  },
  {
    initialRouteName: 'Registration',
    navigationOptions,
  },
);

const verificationStack = createStackNavigator(
  {
    Verification: {screen: Verification, navigationOptions},
  },
  {
    initialRouteName: 'Verification',
    navigationOptions,
  },
);
const menuStack = createStackNavigator(
  {
    Menu: {screen: Menu, navigationOptions},
  },
  {
    initialRouteName: 'Menu',
    navigationOptions,
  },
);
const flightStack = createStackNavigator(
  {
    Flight: {screen: Flight, navigationOptions},
  },
  {
    initialRouteName: 'Flight',
    navigationOptions,
  },
);
const taxiStack = createStackNavigator(
  {
    Taxi: {screen: Taxi, navigationOptions},
  },
  {
    initialRouteName: 'Taxi',
    navigationOptions,
  },
);

const confirmflightStack = createStackNavigator(
  {
    ConfirmFlight: {screen: ConfirmFlight, navigationOptions},
  },
  {
    initialRouteName: 'ConfirmFlight',
    navigationOptions,
  },
);
const confirmtaxiStack = createStackNavigator(
  {
    ConfirmTaxi: {screen: ConfirmTaxi, navigationOptions},
  },
  {
    initialRouteName: 'ConfirmTaxi',
    navigationOptions,
  },
);

const Routes = createStackNavigator(
  {
    unauthorized: {screen: unauthorizedStack},
    Landing: {screen: landingStack},
    LogIn: {screen: logInStack},
    Registration: {screen: registrationStack},
    Verification: {screen: verificationStack},
    Menu: {screen: menuStack},
    Flight: {screen: flightStack},
    Taxi: {screen: taxiStack},
    ConfirmFlight: {screen: confirmflightStack},
    ConfirmTaxi: {screen: confirmtaxiStack},
  },
  {
    initialRouteName: 'unauthorized',
  },
);

const MainApp = createAppContainer(Routes);
export default MainApp;
