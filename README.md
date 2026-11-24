# Getting Started

Within the root of your React Native project, open the `app.json` or (if using Expo) `app.config.js` file and add the following keys with the IDs from the Tapsell console:

```json
{
  "react-native-tapsell-mediation": {
    "TapsellMediationAppKey": "xxxxxxxx",
    "TapsellMediationAdmobAdapterSignature": "ca-app-pub-xxxxxxxx~xxxxxxxx"
  }
}
```

Then run the Tapsell CLI to inject the keys into the Android build:

```sh
npx tapsell configure-android    # or: npm run configure-android
```

The command reads the keys from the config file and writes a `manifestPlaceholders` block into
`android/app/build.gradle`. Re-run it whenever your keys change. With no keys configured, it
removes the injected block instead. If the `react-native-tapsell-mediation` section is missing,
the command asks for the keys interactively — `TapsellMediationAdmobAdapterSignature` is required
only when the Admob adapter is installed — saves them to the config file, then injects. `app.json` and
`app.config.js` (CommonJS or ESM) are treated the same.
