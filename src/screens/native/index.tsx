import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import { AdKeys } from '../../Constants';
import { styles } from './styles';
import { useAdProvider } from '../../ad/AdProvider';
import { LogText } from '../../components';
import { NativeAdView } from './NativeAdView';

const NativeScreen = () => {
  const {
    requestNativeAdCallBack,
    showNativeAdCallBack,
    destroyNativeAdCallBack,
    clickNativeAdCallBack,
    logMessage,
  } = useAdProvider();
  const [ads, setAds] = useState<string[]>([]);
  const adsRef = useRef<string[]>([]);

  const destroyAd = useCallback(
    (ad: string) => {
      destroyNativeAdCallBack(ad);
    },
    [destroyNativeAdCallBack],
  );

  useEffect(() => {
    return () => {
      adsRef.current.forEach(ad => {
        destroyAd(ad);
      });
    };
  }, [destroyAd]);

  return (
    <View style={styles.container}>
      <Button
        title="Request Ad"
        onPress={async () => {
          try {
            const adId = await requestNativeAdCallBack(AdKeys.LegacyKeys.NATIVE);
            adsRef.current = [adId, ...adsRef.current];
            setAds([adId, ...ads]);
          } catch {}
        }}
      />

      <FlatList
        style={styles.adList}
        keyExtractor={(ad: string) => ad}
        data={ads}
        renderItem={({ item }) => (
          <NativeAdView
            adId={item}
            showNativeAdCallBack={showNativeAdCallBack}
            clickNativeAdCallBack={clickNativeAdCallBack}
            onAdImpression={() => {
              console.log('onAdImpression');
            }}
            onAdClicked={() => {
              console.log('onAdClicked');
            }}
            onAdFailed={(error: string) => {
              console.log('onAdFailed', error);
            }}
          />
        )}
      />
      <LogText style={styles.log} message={logMessage} />
    </View>
  );
};

export default NativeScreen;
