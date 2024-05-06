import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  adList: {
    flex: 0.7,
  },
  log: {
    flex: 0.3,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 15,
  },
  icon: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    borderRadius: 28,
  },
  landscapeImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 8,
    alignSelf: 'center',
  },
  cta: {
    marginTop: 0,
    width: 266,
    backgroundColor: '#383535',
    alignSelf: 'center',
  },
  ctaText: {
    color: '#f45201',
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 8
  },
});
