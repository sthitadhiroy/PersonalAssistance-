import React, {Component} from 'react';
import {
  Button,
  Header,
  ButtonGroup,
  Input,
  Divider,
  Overlay,
  Image,
} from 'react-native-elements';
import {View, Text, ImageBackground} from 'native-base';
import NumericInput from 'react-native-numeric-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';
import picture from '../../Images/white-plane-sky.jpg';
class Flight extends Component {
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
    this.props.navigation.navigate('ConfirmFlight');
  };
  render() {
    const buttons = ['Round Trip', 'One Way'];
    const {selectedIndex} = this.state;
    const button = ['Economy', 'Comfort', 'Business'];
    //const {selectedIndex} = this.state;
    return (
      <View>
        <ScrollView>
          <Header
            // placement="right"
            centerComponent={{
              text: 'Flight Booking',
              style: {color: '#fff', fontWeight: 'bold'},
            }}
            containerStyle={{
              height: '8%',
            }}
          />
          <View style={{padding: 10}} />
          <KeyboardAwareScrollView
            enableOnAndroid
            enableAutomaticScroll
            keyboardOpeningTime={0}
            extraHeight={Platform.select({android: 200})}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{height: 50}}
            />
            <Input placeholder="Origin" />
            <View style={{padding: 10}} />
            <Input placeholder="Destination" />
            <View style={{padding: 10}} />
            <Input placeholder="Leaving" />
            <View style={{padding: 10}} />
            <Input placeholder="Returning" />
            <View style={{padding: 10}} />
            <View style={{padding: 10}}>
              <Text>Adult(From 14 years)</Text>
              <View style={{padding: 5}} />
              <NumericInput onChange={value => console.log(value)} />
            </View>
            <View style={{padding: 10}}>
              <Text>Children(2-14 years)</Text>
              <View style={{padding: 5}} />
              <NumericInput onChange={value => console.log(value)} />
            </View>
            <View style={{padding: 10}}>
              <Text>Infant(0-2 years)</Text>
              <View style={{padding: 5}} />
              <NumericInput onChange={value => console.log(value)} />
            </View>
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
              <Button title="Confirm" onPress={this.FunctionToConfirm} />
            </Overlay>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={button}
              containerStyle={{height: 50}}
            />
            <View style={{padding: 10}} />

            <View style={{padding: 30}}>
              <Button title="Submit" onPress={this.overlayy} />
            </View>

            <View style={{padding: 20}} />
          </KeyboardAwareScrollView>
        </ScrollView>
      </View>
    );
  }
}
export default Flight;
