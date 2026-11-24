import React, { useState } from 'react';
import type { NativeAdViewProps } from './NativeAdProps';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { TapsellNativeAd } from './TapsellNativeAd';

export const NativeAdView = (props: NativeAdViewProps) => {
  const {
    adId,
    showNativeAdCallBack,
    clickNativeAdCallBack,
    onAdImpression,
    onAdClicked,
    onAdFailed,
  } = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [bannerImageUrl, setBannerImageUrl] = useState('');
  const [callToActionText, setCallToActionText] = useState('');

  return (
    <TapsellNativeAd
      adId={adId}
      adDispatch={{
        setTitle,
        setDescription,
        setLogo,
        setBannerImageUrl,
        setCallToActionText,
      }}
      showNativeAdCallBack={showNativeAdCallBack}
      onAdImpression={onAdImpression}
      onAdClicked={onAdClicked}
      onAdFailed={onAdFailed}
    >
      <View style={styles.titleRow}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {logo !== '' && <Image style={styles.icon} source={{ uri: logo }} />}
      </View>
      {bannerImageUrl !== '' && (
        <Image style={styles.landscapeImage} source={{ uri: bannerImageUrl }} />
      )}
      {callToActionText !== '' && (
        <TouchableOpacity
          style={styles.cta}
          onPress={() => {
            clickNativeAdCallBack(adId);
          }}
        >
          <Text style={styles.ctaText}>{callToActionText}</Text>
        </TouchableOpacity>
      )}
    </TapsellNativeAd>
  );
};
