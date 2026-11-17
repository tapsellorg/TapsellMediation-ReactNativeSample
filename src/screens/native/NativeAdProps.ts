import type { ReactNode } from 'react';
import type { NativeAdDispatch } from '@react-native-tapsell-mediation/tapsell';

export type NativeAdCallbacks = {
  onAdImpression: () => void;
  onAdClicked: () => void;
  onAdFailed: (error: string) => void;
};

export type ShowNativeAdCallBack = (
  adId: string,
  adDispatch: NativeAdDispatch,
  onAdImpression: () => void,
  onAdClicked: () => void,
  onAdFailed: (error: string) => void,
) => void;

export type TapsellNativeAdProps = NativeAdCallbacks & {
  children: ReactNode;
  adId: string;
  adDispatch: NativeAdDispatch;
  showNativeAdCallBack: ShowNativeAdCallBack;
};

export type NativeAdViewProps = NativeAdCallbacks & {
  adId: string;
  showNativeAdCallBack: ShowNativeAdCallBack;
  clickNativeAdCallBack: (adId: string) => void;
};
