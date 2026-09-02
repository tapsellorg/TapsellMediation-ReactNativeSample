import { Button, View } from 'react-native';
import { AdKeys } from '../../Constants';
import React, { useState } from 'react';
import { styles } from './styles';
import { useAdProvider } from '../../ad/AdProvider';
import { LogText } from '../../components';

const BannerScreen = () => {
  const [ad, setAd] = useState<string | null>(null);
  const {
    requestBannerCallBack,
    showBannerAdCallBack,
    destroyBannerAdCallBack,
    logMessage,
  } = useAdProvider();

  return (
    <View style={styles.container}>
      <Button
        title="Request Ad"
        onPress={async () => {
          try {
            const adId = await requestBannerCallBack(
              AdKeys.TapsellMediationKeys.BANNER,
            );
            setAd(adId);
          } catch {}
        }}
      />
      <Button title="Show Ad" onPress={() => showBannerAdCallBack(ad ?? '')} />
      <Button
        title="Destroy Ad"
        onPress={() => destroyBannerAdCallBack(ad ?? '')}
      />
      <LogText message={logMessage} />
    </View>
  );
};

export default BannerScreen;
