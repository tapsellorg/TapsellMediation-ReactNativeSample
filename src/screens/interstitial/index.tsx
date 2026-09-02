import { Button, View } from 'react-native';
import { AdKeys } from '../../Constants';
import React, { useState } from 'react';
import { styles } from './styles';
import { useAdProvider } from '../../ad/AdProvider';
import { LogText } from '../../components';

const InterstitialScreen = () => {
  const [ad, setAd] = useState<string | null>(null);
  const { requestInterstitialAdCallBack, showInterstitialAdCallBack, logMessage } =
    useAdProvider();

  return (
    <View style={styles.container}>
      <Button
        title="Request Ad"
        onPress={async () => {
          try {
            const adId = await requestInterstitialAdCallBack(
              AdKeys.TapsellMediationKeys.INTERSTITIAL,
            );
            setAd(adId);
          } catch {}
        }}
      />
      <Button
        title="Show Ad"
        onPress={() => showInterstitialAdCallBack(ad ?? '')}
      />
      <LogText message={logMessage} />
    </View>
  );
};

export default InterstitialScreen;
