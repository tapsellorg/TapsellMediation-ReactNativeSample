import React, { useEffect } from 'react';
import { View } from 'react-native';
import type { NativeAdProps } from './NativeAdProps';
import { TapsellLegacyAdapter } from '@react-native-tapsell-mediation/legacy';

export const TapsellNativeAd = (props: NativeAdProps) => {
  const {
    adId,
    setTitle,
    setDescription,
    setLogo,
    setBannerImageUrl,
    setCallToActionText,
    showNativeAdCallBack,
    onAdImpression,
    onAdClicked,
    onAdClosed,
    onAdFailed,
  } = props;

  useEffect(() => {
    if (adId) {
      showNativeAdCallBack(adId, {
        setTitle: setTitle,
        setDescription: setDescription,
        setLogo: setLogo,
        setBannerImageUrl: setBannerImageUrl,
        setCallToActionText: setCallToActionText,
      }, onAdImpression, onAdClicked, onAdClosed, onAdFailed);
    }
  }, [adId]);

  useEffect(() => {
    TapsellLegacyAdapter.register();
  }, []);

  return (
    <View>
      {props.children}
    </View>
  );
};
