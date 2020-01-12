import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, FlatList, StyleSheet} from 'react-native';
import {apiRequest} from '../api/utils';
import {ListItem} from '../components/ListItem';
import colors from '../config/colors';
import getStores from '../api/stores';

class StoresScreen extends React.Component {
  state = {
    isFetching: false,
    fetchError: null,
    stores: [],
  };

  componentDidMount() {
    this.fetchStores();
  }

  async fetchStores() {
    const {navigation} = this.props;
    const locality = navigation.getParam('locality');
    const city = navigation.getParam('city');
    console.log(locality, city);
    this.setState({isFetching: true, fetchError: null});
    try {
      const stores = await getStores(locality, city);
      //const stores = Stores();
      // console.log('myStores', stores);
      this.setState({
        isFetching: false,
        stores: stores,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        isFetching: false,
        fetchError: error,
      });
    }
  }

  render() {
    const {navigation} = this.props;
    const locality = JSON.stringify(
      navigation.getParam('locality', 'locality'),
    );
    const city = JSON.stringify(navigation.getParam('city', 'city'));
    console.log(locality, city);
    // users = loadUsers();

    return (
      <FlatList
        style={{backgroundColor: colors.background}}
        data={this.state.stores}
        renderItem={({item}) => (
          <ListItem user={item} onPress={() => this.handleRowPress(item)} />
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default StoresScreen;
