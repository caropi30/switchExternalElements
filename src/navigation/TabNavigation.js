import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import StackNavigation from './StackNavigation';
import CategoryScreen from '../containers/CategoryScreen';
import CartScreen from '../containers/CartScreen';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const renderHeader = () => <Header />;

    const renderHomeIcon = () => <Ionicons name="home-outline" size={25} />;

    const renderCategoryIcon = () => <MaterialIcons name="category" size={25} />;

    const renderCartIcon = () => <Feather name="shopping-cart" size={25} />;

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    header: renderHeader,
                }}
            >
                <Tab.Screen
                    name="HomeTab"
                    component={StackNavigation}
                    options={{
                        header: () => null,
                        title: 'Home',
                        tabBarIcon: renderHomeIcon,
                    }}
                />
                <Tab.Screen
                    name="Category"
                    component={CategoryScreen}
                    options={{
                        title: 'Category',
                        tabBarIcon: renderCategoryIcon,
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        title: 'Cart',
                        tabBarIcon: renderCartIcon,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigation;
