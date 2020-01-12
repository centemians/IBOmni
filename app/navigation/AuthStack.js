import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import UserSignupScreen from '../screens/UserSignupScreen';
import ShopSignupScreen from '../screens/ShopSignupScreen';

const AuthStack = createStackNavigator(
  {
    'auth.login': {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
      },
    },
    'auth.signup_user': {
      screen: UserSignupScreen,
      navigationOptions: {
        title: 'Create Account',
      },
    },
    'auth.signup_shop': {
      screen: ShopSignupScreen,
      navigationOptions: {
        title: 'Create Account',
      },
    },
  },
  {
    initialRouteName: 'auth.login',
  },
);

export default AuthStack;
