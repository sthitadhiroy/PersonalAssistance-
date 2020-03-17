import React, {Component} from 'react';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';

import {
  AsyncStorage,
  View,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';

import {StackActions, NavigationActions} from 'react-navigation';
import styles from './styles';

class Menu extends Component {
  FunctionToTravel = name => {
    if (name === 'FLIGHT') {
      this.props.navigation.navigate('Flight');
    }

    if (name === 'TAXI') {
      this.props.navigation.navigate('Taxi');
    }
    if (name === 'HOTEL') {
      this.props.navigation.navigate('Login');
    }
    if (name === 'TRAVEL') {
      this.props.navigation.navigate('Login');
    }
    if (name === 'MOVIE') {
      this.props.navigation.navigate('Login');
    }
    if (name === 'TRAIN') {
      this.props.navigation.navigate('Login');
    }
  };

  render() {
    const items = [
      {name: 'FLIGHT', code: 'transparent'},
      {name: 'TAXI', code: 'transparent'},
      {name: 'HOTEL', code: 'transparent'},
      {name: 'TRAVEL', code: 'transparent'},
      {name: 'MOVIE', code: 'transparent'},
      {name: 'TRAIN', code: 'transparent'},
      {name: 'BUS', code: 'transparent'},
      {name: 'EVENT', code: 'transparent'},
      {name: 'SHOPPING', code: 'transparent'},
      {name: 'ASSISTANCE', code: 'transparent'},
    ];
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../Images/normal.jpeg')}>
        <View style={styles.container}>
          <FlatGrid
            itemDimension={150}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => this.FunctionToTravel(item.name)}>
                <View
                  style={[styles.itemContainer, {backgroundColor: item.code}]}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Image
                    style={{
                      height: 120,
                      resizeMode: 'stretch',
                      width: 110,
                    }}
                    source={require('../../Images/menu001.png')}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Menu;
