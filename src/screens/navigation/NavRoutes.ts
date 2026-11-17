export const NavRoutes = {
  Home: 'Home',
  Banner: 'Banner',
  Rewarded: 'Rewarded',
  Interstitial: 'Interstitial',
  Native: 'Native',
} as const;

export type RootStackParamList = {
  Home: undefined;
  Banner: undefined;
  Rewarded: undefined;
  Interstitial: undefined;
  Native: undefined;
};
