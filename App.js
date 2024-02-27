import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useFont from './src/hooks/useFont';
import StackNavigation from './src/navigation/StackNavigation';
import TabNavigation from './src/navigation/TabNavigation';


export default function App() {
    const { fontsLoaded } = useFont();
    if (!fontsLoaded) {
        return <Text>Cargando ...</Text>
    }

    return (
        <>
            {/* <StackNavigation /> */}
            <TabNavigation />
        </>
    );
};