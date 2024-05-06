import { useCallback, useState, useEffect } from 'react';
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
  destroyNativeAd
} from '@react-native-tapsell-mediation/tapsell';

export const useAdProvider = () => {

  const [logMessage, setLogMessage] = useState('');

  useEffect(() => {
    clearLogs();
  }, []);

  const setUserConsentCallBack = useCallback(() => {
    setUserConsent(true);
  }, []);

  const addLog = useCallback((message: string) => {
    setLogMessage((prevState: string) => prevState + '\n' + message);
    console.log(message);
  }, []);

  const clearLogs = useCallback(() => {
    setLogMessage('');
    console.clear();
  })

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
    []
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
    []
  );

  const requestBannerCallBack = useCallback(
    (
      zoneId: string = AdKeys.TapsellMediationKeys.BANNER,
      bannerSize: BannerSize = BannerSize.BANNER_320_50
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
    []
  );

  const requestNativeAdCallBack = useCallback(
    (zoneId: string = AdKeys.TapsellMediationKeys.NATIVE) => {
      return new Promise<string>((resolve: (value: string) => void, reject) => {
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
    []
  );

  const requestMultipleNativeAdCallBack = useCallback(
    (
      zoneId: string = AdKeys.TapsellMediationKeys.NATIVE,
      maximumCount: number = 5
    ) => {
      return new Promise((resolve, reject) => {
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
    []
  );

  const showRewardedAdCallBack = useCallback((adId: string) => {
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
        console.log('onRewarded');
      },
      onAdClosed: (completionState: CompletionState) => {
        addLog('onAdClosed: ' + CompletionState[completionState]);
      },
      onAdFailed: (error: string) => {
        console.log('onAdFailed', error);
      },
    });
  }, []);

  const showInterstitialAdCallBack = useCallback((adId: string) => {
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
  }, []);

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
        onAdClosed: (completionState: CompletionState) => {
          addLog('onAdClosed', CompletionState[completionState]);
        },
        onAdFailed: (error: string) => {
          addLog('onAdFailed', error);
        },
      });
    },
    []
  );

  const showNativeAdCallBack = useCallback((
    adId: string,
    adDispatch: NativeAdDispatch,
    onAdImpression: () => void,
    onAdClicked: () => void,
    onAdClosed: (completionState: CompletionState) => void,
    onAdFailed: (error: string) => void) => {
      addLog('showAd');
      if (!adId) {
        addLog('AdId does not exist');
        return;
      }
      showNativeAd(adId, adDispatch, {
        onAdImpression: () => {
          onAdImpression()
          addLog('onAdImpression');
        },
        onAdClicked: () => {
          onAdClicked()
          addLog('onAdClicked: ' + adId);
        },
        onAdClosed: (completionState: CompletionState) => {
          onAdClosed(completionState)
          addLog('onAdClosed', CompletionState[completionState]);
        },
        onAdFailed: (error: string) => {
          onAdFailed(error)
          addLog('onAdFailed', error);
        },
      });
    },
    []
  );

  const clickNativeAdCallBack = useCallback((adId: string) => {
    addLog('clickNativeAd');
    if (!adId) {
      addLog('AdId does not exist');
      return;
    }
    clickNativeAd(adId);
  }, []);

  const destroyBannerAdCallBack = useCallback((adId: string) => {
    addLog('destroyAd');
    if (!adId) {
      addLog('AdId does not exist');
      return;
    }
    destroyBannerAd(adId);
  }, []);

  const destroyNativeAdCallBack = useCallback((adId: string) => {
    addLog('destroyAd');
    if (!adId) {
      addLog('AdId does not exist');
      return;
    }
    destroyNativeAd(adId);
  }, []);

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
    logMessage
  };
};
