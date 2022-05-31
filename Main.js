import react from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/store';
import { Provider } from 'react-redux';
//icons
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import Home from './screens/Home';
import Car from './screens/Car';
import Bike from './screens/Bike';
import Blog from './screens/Blog';
import Account from './screens/Account';

import SignIn from './screens/SignIn'
import Login from './screens/Login'
import PersonalInfo from './component/PersonalInfo';
import TransactionHistory from './component/TransactionHistory';
import Cart from './component/Cart';
import CarDetail from './component/CarDetail';
import OrderInfor from './component/OrderInfor';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Tab.Navigator
      initialRouteName="Auth"
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
              iconName = focused
              ? 'house-user'
              : 'house-user';
          } else if (route.name === 'Car') {
              iconName = focused ? 'car' : 'car';
          } else if (route.name === 'Bike') {
              iconName = focused ? 'motorcycle' : 'motorcycle';
          } else if (route.name === 'Blog') {
              iconName = focused ? 'blog' : 'blog';
          } else if (route.name === 'Account') {
              iconName = focused ? 'user-alt' : 'user-alt';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          // tabBarActiveTintColor: 'tomato',
          // tabBarInactiveTintColor: 'gray',
      })}
    >
    <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
    />
    <Tab.Screen
        name="Car"
        component={Car}
        options={{headerShown: false}}
    />
    <Tab.Screen
        name="Bike"
        component={Bike}
        options={{headerShown: false}}
    />
    <Tab.Screen
        name="Blog"
        component={Blog}
        options={{headerShown: false}}
    />
    <Tab.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
    />
  </Tab.Navigator>
  )
}

const Main = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator
            // initialRouteName="Login"
            initialRouteName="Auth"
          >
            <Stack.Screen
              name='Login'
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='SignIn'
              component={SignIn}
              options={{
                title: 'Đăng ký', //Set Header Title
                headerStyle: {
                  backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                  fontWeight: 'bold', //Set Header text style
                },
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen 
              name='Auth'
              component={Auth}
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name='PersonalInfo'
              component={PersonalInfo}
              options={{
                title: 'Thông tin cá nhân', //Set Header Title
                headerStyle: {
                  backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                  fontWeight: 'bold', //Set Header text style
                },
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen 
              name='TransactionHistory'
              component={TransactionHistory}
              options={{
                title: 'Lịch sử giao dịch', //Set Header Title
                headerStyle: {
                  backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                  fontWeight: 'bold', //Set Header text style
                },
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen 
              name='Cart'
              component={Cart}
              options={{
                title: 'Giỏ hàng', //Set Header Title
                headerStyle: {
                  backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                  fontWeight: 'bold', //Set Header text style
                },
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen 
              name='CarDetail'
              component={CarDetail}
              options={({route}) => (
                {
                  title: route.params.nameParam, //Set Header Title
                  headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                  },
                  headerTintColor: '#fff', //Set Header text color
                  headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                  },
                  headerTitleAlign: "center",
                }
              )}
            />
            <Stack.Screen 
              name='OrderInfor'
              component={OrderInfor}
              options={({route}) => (
                {
                  title: 'Thông tin đặt hàng', //Set Header Title
                  headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                  },
                  headerTintColor: '#fff', //Set Header text color
                  headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                  },
                  headerTitleAlign: "center",
                }
              )}
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})