import { Button, View } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import { useAdProvider } from '../../ad/AdProvider';
import { NavRoutes, RootStackParamList } from '../navigation/NavRoutes';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { setUserConsentCallBack } = useAdProvider();

  useEffect(() => {
    setUserConsentCallBack();
  }, [setUserConsentCallBack]);

  return (
    <View style={styles.container}>
      <Button
        title="Rewarded Ad"
        onPress={() => {
          navigation.navigate(NavRoutes.Rewarded);
        }}
      />
      <Button
        title="Interstitial Ad"
        onPress={() => {
          navigation.navigate(NavRoutes.Interstitial);
        }}
      />
      <Button
        title="Banner Ad"
        onPress={() => {
          navigation.navigate(NavRoutes.Banner);
        }}
      />
      <Button
        title="Native Ad"
        onPress={() => {
          navigation.navigate(NavRoutes.Native);
        }}
      />
    </View>
  );
};

export default HomeScreen;
