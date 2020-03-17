import React, {Component} from 'react';
import {
  Button,
  Header,
  ListItem,
  Input,
  Divider,
  Overlay,
  CheckBox,
  Image,
} from 'react-native-elements';
import {View, Text} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import picture from '../../Images/taxicon.png';
class ConfirmFlight extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };

    this.overlayy = this.overlayy.bind(this);
  }

  overlayy() {
    this.setState({isVisible: true});
  }
  FunctionToConfirm = () => {
    this.setState({isVisible: false});
    this.props.navigation.navigate('Menu');
  };
  render() {
    const {selectedIndex} = this.state;
    const list = [
      {
        name: 'Mastercard',
        avatar_url:
          'https://banner2.cleanpng.com/20180802/xri/kisspng-logo-mastercard-vector-graphics-font-visa-mastercard-logo-png-photo-png-arts-5b634298cd58d5.9008352515332317688411.jpg',
        subtitle: (
          <View>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 25,
                width: 25,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 2,
                marginLeft: 'auto',
                marginTop: -20,
              }}></View>
          </View>
        ),
      },

      {
        name: 'Visa',
        avatar_url:
          'data:image/png;base64,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',
        subtitle: (
          <View>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 25,
                width: 25,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 2,
                marginLeft: 'auto',
                marginTop: -20,
              }}></View>
          </View>
        ),
      },
      {
        name: 'Google Pay',
        avatar_url:
          'data:image/png;base64,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',
        subtitle: (
          <View>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 25,
                width: 25,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 2,
                marginLeft: 'auto',
                marginTop: -20,
              }}></View>
          </View>
        ),
      },
      {
        name: 'Phonepe',
        avatar_url:
          'data:image/jpeg;base64,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',
        subtitle: (
          <View>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 25,
                width: 25,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 2,
                marginLeft: 'auto',
                marginTop: -20,
              }}></View>
          </View>
        ),
      },
      {
        name: 'Paytm',
        avatar_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl-NcDraoY2WeLPaBVnTXVTbnc_6plvo9fF_Te-G4soge8AFYI',
        subtitle: (
          <View>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 25,
                width: 25,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 2,
                marginLeft: 'auto',
                marginTop: -20,
              }}></View>
          </View>
        ),
      },
      {
        name: 'Personal Assistance Wallet',
        avatar_url:
          'data:image/png;base64,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',
        subtitle: (
          <View>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 25,
                width: 25,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 2,
                marginLeft: 'auto',
                marginTop: -20,
              }}></View>
          </View>
        ),
      },
    ];
    return (
      <View>
        <Text
          h1
          style={{
            padding: 10,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {' '}
          Payments
        </Text>
        <View>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{source: {uri: l.avatar_url}}}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))}
        </View>
        <View style={{padding: 10}} />
        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({isVisible: false})}>
          <View style={{height: '80%'}}>
            <Image source={picture} style={{width: 250, height: 250}} />
            <Text>Taxi is booked.</Text>
            <Text>Happy Journey</Text>
            <View style={{padding: 10}} />
            <Text>OTP:- 2299</Text>
            <Text>Share it with the driver </Text>
            <Text>Please co-operate</Text>
          </View>
          <View style={{padding: 20}} />
          <Button title="Ride" onPress={this.FunctionToConfirm} />
        </Overlay>

        <View style={{padding: 30}}>
          <Button title="Confirm Booking" onPress={this.overlayy} />
        </View>
      </View>
    );
  }
}
export default ConfirmFlight;
