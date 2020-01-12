import React from 'react';
import {Button, Text, View, TextInput, StyleSheet} from 'react-native';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locality: 'Park-Avenue',
      city: 'Kolkata',
    };
  }

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View>
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
        </View>
        <View>
          <Button
            title="Stores"
            //onPress={() => navigation.navigate('user.stores')}
            onPress={() => {
              navigation.navigate('user.stores', {
                locality: this.state.locality,
                city: this.state.city,
              });
            }}
          />
        </View>
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

export default ProfileScreen;
