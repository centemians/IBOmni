import React from 'react';
import {View, Text, TouchableHighlight, Platform, Image} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

import styles, {CHEVRON_SIZE} from './styles';
import {capitalizeFirstLetter} from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({user, onPress}) => {
  const name = `${capitalizeFirstLetter(user.shopName)}`;
  const city = `${user.locality}, ${user.city}`;
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.rowUnderlay}>
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{city}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Text style={{...styles.chevron, ...styles.name}}>
            {user.dailyLimit}
          </Text>
          <Text style={{...styles.chevron, ...styles.email}}>Cash Limit</Text>
        </View>
        {/* <View style={styles.chevronContainer}>
          <Icon
            name="md-arrow-forward"
            size={CHEVRON_SIZE}
            color={colors.subtleText}
            style={styles.chevron}
          />
        </View> */}
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
