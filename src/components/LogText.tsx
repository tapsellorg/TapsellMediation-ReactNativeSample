import React from 'react';
import { ScrollView, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

type LogTextProps = {
  message: string;
  style?: StyleProp<ViewStyle>;
};

export const LogText = ({ message, style }: LogTextProps) => {
  return (
    <ScrollView style={[styles.log, style]}>
      <Text style={styles.text}>{message}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  log: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
});
