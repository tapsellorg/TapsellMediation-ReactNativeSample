import React from 'react';
import { NavRoutes } from './NavRoutes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BannerScreen, HomeScreen, InterstitialScreen, RewardedScreen, NativeScreen } from '../index';

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer children={
      <Stack.Navigator initialRouteName={NavRoutes.Home}>
        <Stack.Screen name={NavRoutes.Home} component={HomeScreen} options={{ headerTitle: 'Tapsell Mediation' }} />
        <Stack.Screen name={NavRoutes.Rewarded} component={RewardedScreen} />
        <Stack.Screen name={NavRoutes.Interstitial} component={InterstitialScreen} />
        <Stack.Screen name={NavRoutes.Banner} component={BannerScreen} />
        <Stack.Screen name={NavRoutes.Native} component={NativeScreen} />
      </Stack.Navigator>
    }
    />
  );
};
