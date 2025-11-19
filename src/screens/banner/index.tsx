import { Button, View } from 'react-native';
import { AdKeys } from '../../Constants';
import React, { useState } from 'react';
import { styles } from './styles';
import { useAdProvider } from '../../ad/AdProvider';
import { LogText } from '../../components';

const BannerScreen = () => {

  const [ad, setAd] = useState(null);
  const { requestBannerCallBack, showBannerAdCallBack, destroyBannerAdCallBack, logMessage } = useAdProvider();

  return (
    <View style={styles.container}>
      <Button
        title="Request Ad"
        onPress={() =>
          requestBannerCallBack(AdKeys.TapsellMediationKeys.BANNER).then((id: string) => {
            setAd(id);
          })
        }
      />
      <Button
        title="Show Ad"
        onPress={() =>
          showBannerAdCallBack(ad)
        }
      />
      <Button
        title="Destroy Ad"
        onPress={() =>
          destroyBannerAdCallBack(ad)
        }
      />
      <LogText message={logMessage} />
    </View>
  );
};

export default BannerScreen;

