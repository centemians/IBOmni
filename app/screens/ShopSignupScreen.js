import React from 'react';

import {Button, Text, View, TextInput, StyleSheet} from 'react-native';

export default class SignupScreen extends React.Component {
  state = {
    ownerName: '',
    shopName: '',
    locality: '',
    city: '',
    phoneNumber: '',
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  signUp = async () => {
    const {ownerName, shopName, locality, city, phoneNumber} = this.state;
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('ownerName', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Shop Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('shopName', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Locality"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('locality', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('city', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('phoneNumber', val)}
        />
        <Button title="Sign Up" onPress={this.signUp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
