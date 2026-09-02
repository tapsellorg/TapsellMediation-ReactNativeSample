import { useCallback, useEffect, useState } from 'react';
import { AdKeys } from '../Constants';
import {
  setUserConsent,
  BannerPosition,
  BannerSize,
  CompletionState,
  type NativeAdDispatch,
  requestRewardedAd,
  requestBannerAd,
  requestInterstitialAd,
  requestMultipleNativeAd,
  requestNativeAd,
  showRewardedAd,
  showInterstitialAd,
  showBannerAd,
  showNativeAd,
  clickNativeAd,
  destroyBannerAd,
  destroyNativeAd,
} from '@react-native-tapsell-mediation/tapsell';

export const useAdProvider = () => {
  const [logMessage, setLogMessage] = useState('');

  const addLog = useCallback((message: string) => {
    setLogMessage(prevState => prevState + '\n' + message);
    console.log(message);
  }, []);

  const clearLogs = useCallback(() => {
    setLogMessage('');
    (console as Console & { clear?: () => void }).clear?.();
  }, []);

  useEffect(() => {
    clearLogs();
  }, [clearLogs]);

  const setUserConsentCallBack = useCallback(() => {
    setUserConsent(true);
  }, []);

  const requestRewardedAdCallBack = useCallback(
    (zoneId: string = AdKeys.TapsellMediationKeys.REWARDED) => {
      return new Promise<string>((resolve, reject) => {
        addLog('requestAd');
        requestRewardedAd(zoneId)
          .then((adId: string) => {
            addLog('onSuccess: ' + adId);
            resolve(adId);
          })
          .catch((error: string) => {
            addLog('onError: ' + error);
            reject(error);
          });
      });
    },
    [addLog],
  );

  const requestInterstitialAdCallBack = useCallback(
    (zoneId: string = AdKeys.TapsellMediationKeys.INTERSTITIAL) => {
      return new Promise<string>((resolve, reject) => {
        addLog('requestAd');
        requestInterstitialAd(zoneId)
          .then((adId: string) => {
            addLog('onSuccess: ' + adId);
            resolve(adId);
          })
          .catch((error: string) => {
            addLog('onError: ' + error);
            reject(error);
          });
      });
    },
    [addLog],
  );

  const requestBannerCallBack = useCallback(
    (
      zoneId: string = AdKeys.TapsellMediationKeys.BANNER,
      bannerSize: BannerSize = BannerSize.BANNER_320_50,
    ) => {
      return new Promise<string>((resolve, reject) => {
        addLog('requestAd');
        requestBannerAd(zoneId, bannerSize)
          .then((adId: string) => {
            addLog('onSuccess: ' + adId);
            resolve(adId);
          })
          .catch((error: string) => {
            addLog('onError: ' + error);
            reject(error);
          });
      });
    },
    [addLog],
  );

  const requestNativeAdCallBack = useCallback(
    (zoneId: string = AdKeys.TapsellMediationKeys.NATIVE) => {
      return new Promise<string>((resolve, reject) => {
        addLog('requestAd');
        requestNativeAd(zoneId)
          .then((adId: string) => {
            addLog('onSuccess: ' + adId);
            resolve(adId);
          })
          .catch((error: string) => {
            addLog('onError: ' + error);
            reject(error);
          });
      });
    },
    [addLog],
  );

  const requestMultipleNativeAdCallBack = useCallback(
    (
      zoneId: string = AdKeys.TapsellMediationKeys.NATIVE,
      maximumCount: number = 5,
    ) => {
      return new Promise<string>((resolve, reject) => {
        addLog('requestAd');
        requestMultipleNativeAd(zoneId, maximumCount)
          .then((adId: string) => {
            addLog('onSuccess: ' + adId);
            resolve(adId);
          })
          .catch((error: string) => {
            addLog('onError: ' + error);
            reject(error);
          });
      });
    },
    [addLog],
  );

  const showRewardedAdCallBack = useCallback(
    (adId: string) => {
      addLog('showAd');
      if (!adId) {
        addLog('AdId does not exist');
        return;
      }
      showRewardedAd(adId, {
        onAdImpression: () => {
          addLog('onAdImpression');
        },
        onAdClicked: () => {
          addLog('onAdClicked');
        },
        onRewarded: () => {
          addLog('onRewarded');
        },
        onAdClosed: (completionState: CompletionState) => {
          addLog('onAdClosed: ' + CompletionState[completionState]);
        },
        onAdFailed: (error: string) => {
          addLog('onAdFailed: ' + error);
        },
      });
    },
    [addLog],
  );

  const showInterstitialAdCallBack = useCallback(
    (adId: string) => {
      addLog('showAd');
      if (!adId) {
        addLog('AdId does not exist');
        return;
      }
      showInterstitialAd(adId, {
        onAdImpression: () => {
          addLog('onAdImpression');
        },
        onAdClicked: () => {
          addLog('onAdClicked');
        },
        onAdClosed: (completionState: CompletionState) => {
          addLog('onAdClosed: ' + CompletionState[completionState]);
        },
        onAdFailed: (error: string) => {
          addLog('onAdFailed: ' + error);
        },
      });
    },
    [addLog],
  );

  const showBannerAdCallBack = useCallback(
    (adId: string, position: BannerPosition = BannerPosition.Bottom) => {
      addLog('showAd');
      if (!adId) {
        addLog('AdId does not exist');
        return;
      }
      showBannerAd(adId, position, {
        onAdImpression: () => {
          addLog('onAdImpression');
        },
        onAdClicked: () => {
          addLog('onAdClicked');
        },
        onAdFailed: (error: string) => {
          addLog('onAdFailed: ' + error);
        },
      });
    },
    [addLog],
  );

  const showNativeAdCallBack = useCallback(
    (
      adId: string,
      adDispatch: NativeAdDispatch,
      onAdImpression: () => void,
      onAdClicked: () => void,
      onAdFailed: (error: string) => void,
    ) => {
      addLog('showAd');
      if (!adId) {
        addLog('AdId does not exist');
        return;
      }
      showNativeAd(adId, adDispatch, {
        onAdImpression: () => {
          onAdImpression();
          addLog('onAdImpression');
        },
        onAdClicked: () => {
          onAdClicked();
          addLog('onAdClicked: ' + adId);
        },
        onAdFailed: (error: string) => {
          onAdFailed(error);
          addLog('onAdFailed: ' + error);
        },
      });
    },
    [addLog],
  );

  const clickNativeAdCallBack = useCallback(
    (adId: string) => {
      addLog('clickNativeAd');
      if (!adId) {
        addLog('AdId does not exist');
        return;
      }
      clickNativeAd(adId);
    },
    [addLog],
  );

  const destroyBannerAdCallBack = useCallback(
    (adId: string) => {
      addLog('destroyAd');
      if (!adId) {
        addLog('AdId does not exist');
        return;
      }
      destroyBannerAd(adId);
    },
    [addLog],
  );

  const destroyNativeAdCallBack = useCallback(
    (adId: string) => {
      addLog('destroyAd');
      if (!adId) {
        addLog('AdId does not exist');
        return;
      }
      destroyNativeAd(adId);
    },
    [addLog],
  );

  return {
    setUserConsentCallBack,
    requestRewardedAdCallBack,
    requestInterstitialAdCallBack,
    requestBannerCallBack,
    requestNativeAdCallBack,
    requestMultipleNativeAdCallBack,
    showRewardedAdCallBack,
    showInterstitialAdCallBack,
    showBannerAdCallBack,
    showNativeAdCallBack,
    clickNativeAdCallBack,
    destroyBannerAdCallBack,
    destroyNativeAdCallBack,
    logMessage,
  };
};
