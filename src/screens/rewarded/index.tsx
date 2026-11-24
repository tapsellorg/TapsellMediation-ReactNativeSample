import { Button, View } from 'react-native';
import { AdKeys } from '../../Constants';
import React, { useState } from 'react';
import { styles } from './styles';
import { useAdProvider } from '../../ad/AdProvider';
import { LogText } from '../../components';

const RewardedScreen = () => {
  const [ad, setAd] = useState<string | null>(null);
  const { requestRewardedAdCallBack, showRewardedAdCallBack, logMessage } =
    useAdProvider();

  return (
    <View style={styles.container}>
      <Button
        title="Request Ad"
        onPress={async () => {
          try {
            const adId = await requestRewardedAdCallBack(
              AdKeys.TapsellMediationKeys.REWARDED,
            );
            setAd(adId);
          } catch {}
        }}
      />
      <Button title="Show Ad" onPress={() => showRewardedAdCallBack(ad ?? '')} />
      <LogText message={logMessage} />
    </View>
  );
};

export default RewardedScreen;
