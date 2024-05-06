import React from 'react';
import { CompletionState, type NativeAdDispatch } from '@react-native-tapsell-mediation/tapsell';

export type NativeAdProps = {
  children: any;
  adId: string;

  title: string;
  description: string;
  logo: string;
  bannerImageUrl: string;
  callToActionText: string;

  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setLogo: React.Dispatch<React.SetStateAction<string>>;
  setBannerImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setCallToActionText: React.Dispatch<React.SetStateAction<string>>;

  onAdImpression: () => void;
  onAdClicked: () => void;
  onAdClosed: () => void;
  onAdFailed: (message: string) => void;

  showNativeAdCallBack: (
    adId: string,
    adDispatch: NativeAdDispatch,
    onAdImpression: () => void,
    onAdClicked: () => void,
    onAdClosed: (completionState: CompletionState) => void,
    onAdFailed: (error: string) => void
  ) => void;
  clickNativeAdCallBack: (adId: string) => void;
};
