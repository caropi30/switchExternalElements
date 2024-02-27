import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/CategoryScreen';
import StackNavigation from './StackNavigation';
import CartScreen from '../container/CartScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator
                 initialRouteName="Home"  
                 screenOptions={{
                     headerShown: false,
               }}
            >
                {/* <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Product" component={ProductScreen} />
                <Tab.Screen name="Detail" component={DetailScreen} />
                <Tab.Screen name="Cart" component={CartScreen} /> */}
                {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
                <Tab.Screen name="Category" component={StackNavigation}/>
                <Tab.Screen name="Cart" component={CartScreen} />
            </Tab.Navigator>
        </NavigationContainer>
       
      );
};

export default TabNavigation;