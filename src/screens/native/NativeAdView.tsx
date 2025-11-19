import React from 'react';
import type { NativeAdProps } from './NativeAdProps';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { TapsellNativeAd } from './TapsellNativeAd';

export const NativeAdView: React.FC<Omit<NativeAdProps, "children">> = (
  props: NativeAdProps,
) => {
  const { adId, title, description, logo, bannerImageUrl, callToActionText, clickNativeAdCallBack } = props;

  return (
    <TapsellNativeAd {...props}>
      <View style={styles.titleRow}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {logo && <Image style={styles.icon} source={{ uri: logo }} />}
      </View>
      {bannerImageUrl && (
        <Image
          style={styles.landscapeImage}
          source={{ uri: bannerImageUrl }}
        />
      )}
      {callToActionText && (
        <TouchableOpacity style={styles.cta} onPress={() => {
          clickNativeAdCallBack(adId);
        }}>
          <Text style={styles.ctaText}>{callToActionText}</Text>
        </TouchableOpacity>
      )}
    </TapsellNativeAd>
  );
};
