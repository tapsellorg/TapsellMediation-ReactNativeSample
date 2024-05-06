import React, { useState, useEffect, useCallback } from 'react';
import { Button, FlatList, View } from 'react-native';
import { AdKeys } from '../../Constants';
import { styles } from './styles';
import { useAdProvider } from '../../ad/AdProvider';
import { LogText } from '../../components';
import type { CompletionState } from '@react-native-tapsell-mediation/tapsell';
import { NativeAdView } from './NativeAdView';

const NativeScreen = () => {
  const {
    requestNativeAdCallBack,
    showNativeAdCallBack,
    destroyNativeAdCallBack,
    clickNativeAdCallBack,
    logMessage,
  } = useAdProvider();
  const [ads, setAds] = React.useState<string[]>([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [bannerImageUrl, setBannerImageUrl] = useState('');
  const [callToActionText, setCallToActionText] = useState('');

  const destroyAd = useCallback((ad: string) => {
    destroyNativeAdCallBack(ad);
  }, []);

  useEffect(() => {
    return () => {
      ads.forEach((ad: string) => {
        destroyAd(ad);
      });
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Request Ad"
        onPress={() =>
          requestNativeAdCallBack(AdKeys.LegacyKeys.NATIVE).then((ad: string) => {
            setAds([ad, ...ads]);
          })
        }
      />

      <FlatList style={styles.adList}
                keyExtractor={(ad: string) => ad}
                data={ads}
                renderItem={({ item }) =>
                  <NativeAdView adId={item}
                                title={title}
                                setTitle={setTitle}
                                description={description}
                                setDescription={setDescription}
                                logo={logo}
                                setLogo={setLogo}
                                bannerImageUrl={bannerImageUrl}
                                setBannerImageUrl={setBannerImageUrl}
                                callToActionText={callToActionText}
                                setCallToActionText={setCallToActionText}
                                showNativeAdCallBack={showNativeAdCallBack}
                                clickNativeAdCallBack={clickNativeAdCallBack}
                                onAdImpression={() => {
                                  console.log('onAdImpression');
                                }}
                                onAdClicked={() => {
                                  console.log('onAdClicked');
                                }}
                                onAdClosed={(completionState: CompletionState) => {
                                  console.log('onAdClosed', completionState);
                                }}
                                onAdFailed={(error: string) => {
                                  console.log('onAdFailed', error);
                                }}
                  />
                }
      />
      <LogText style={styles.log} message={logMessage} />
    </View>
  );
};


export default NativeScreen;


