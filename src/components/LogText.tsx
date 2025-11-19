import { Text } from 'react-native';
import React from 'react';

export const LogText = ({ message, ...props }) => {
  return <Text {...props}>{message ?? ''}</Text>;
};
