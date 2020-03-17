import React, {Component} from 'react';
import {
  Button,
  Header,
  ButtonGroup,
  Input,
  Overlay,
  Image,
} from 'react-native-elements';
import {View, Text, ImageBackground} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import picture from '../../Images/taxi.jpeg';
import taximaps from '../../Images/taxi-maps.jpeg';
class Taxi extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2,
      isVisible: false,
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.overlayy = this.overlayy.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  overlayy() {
    this.setState({isVisible: true});
  }
  FunctionToConfirm = () => {
    this.setState({isVisible: false});
    this.props.navigation.navigate('ConfirmTaxi');
  };
  render() {
    const buttons = ['Moto', 'Mini', 'Sedan'];
    const {selectedIndex} = this.state;

    return (
      <View>
        <ScrollView>
          <Header
            // placement="right"
            centerComponent={{
              text: 'Taxi Booking',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
            containerStyle={{
              height: '10%',
            }}
          />
          <View style={{padding: 10}} />
          <Image source={taximaps} style={{width: 500, height: 200}} />
          <View style={{padding: 10}} />

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50}}
          />

          <Input placeholder="Location" />
          <View style={{padding: 10}} />
          <Input placeholder="Destination" />
          <View style={{padding: 10}} />

          <Overlay
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({isVisible: false})}>
            <View style={{height: '80%'}}>
              <Text>Lorem ipsum, or lipsum as it is sometimes known</Text>
              <Text>Lorem ipsum, or lipsum as it is sometimes known</Text>
              <Text>Lorem ipsum, or lipsum as it is sometimes known</Text>
              <Text>19 USD | 1300 INR | 70 AED </Text>
              <View style={{padding: 20}} />
              <Image source={picture} style={{width: 200, height: 200}} />
              <Text>Total Fare: 1300 INR</Text>
            </View>
            <View style={{padding: 20}} />
            <Button title="Pay" onPress={this.FunctionToConfirm} />
          </Overlay>

          <View style={{padding: 10}} />

          <View style={{padding: 30}}>
            <Button title="Confirm" onPress={this.overlayy} />
          </View>
          <View style={{padding: 20}} />
        </ScrollView>
      </View>
    );
  }
}
export default Taxi;
