import React, { useEffect } from 'react';
import { View } from 'react-native';
import type { TapsellNativeAdProps } from './NativeAdProps';
import { TapsellLegacyAdapter } from '@react-native-tapsell-mediation/legacy';

export const TapsellNativeAd = (props: TapsellNativeAdProps) => {
  const {
    children,
    adId,
    adDispatch,
    showNativeAdCallBack,
    onAdImpression,
    onAdClicked,
    onAdFailed,
  } = props;

  useEffect(() => {
    if (adId) {
      showNativeAdCallBack(
        adId,
        adDispatch,
        onAdImpression,
        onAdClicked,
        onAdFailed,
      );
    }
    // The dispatch setters and callbacks are recreated on every render;
    // the ad should be shown once per adId.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adId]);

  useEffect(() => {
    TapsellLegacyAdapter.register();
  }, []);

  return <View>{children}</View>;
};
