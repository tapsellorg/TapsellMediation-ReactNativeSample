import { Button, View } from 'react-native';
import { AdKeys } from '../../Constants';
import React, { useState } from 'react';
import { styles } from './styles';
import { useAdProvider } from '../../ad/AdProvider';
import { LogText } from '../../components';

const RewardedScreen = () => {

  const [ad, setAd] = useState(null);
  const { requestRewardedAdCallBack, showRewardedAdCallBack, logMessage } = useAdProvider();

  return (
    <View style={styles.container}>
      <Button
        title="Request Ad"
        onPress={() =>
          requestRewardedAdCallBack(AdKeys.TapsellMediationKeys.REWARDED).then((id: string) => {
            setAd(id);
          })
        }
      />
      <Button
        title="Show Ad"
        onPress={() =>
          showRewardedAdCallBack(ad)
        }
      />
      <LogText message={logMessage} />
    </View>
  );
};

export default RewardedScreen;

