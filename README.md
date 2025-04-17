# CodeScanner

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

Use this application to scan product barcodes to search for environmental / human rights articles about the corporation.

This application is under development. It uses The Guardian API to search for articles involving the corporation of the product scanned. The Guardian is a global news organization providing open access to investigative journalism. Future work will include sources from other investigative outlets, NGOs, and government websites.

Environmental and human rights abuses are committed every day by some of the most ubiquitous corporations whose products we use every day. This app will be a step forward in compiling publicly available information about these abuses for the average consumer.

Note: this app is not functional without your own API key to use the Guardian's api, or without a UPC lookup api. The latter typically costs money to use.

Uses:
- Expo Router for navigation
- Expo Camera for barcode scanning
- Guardian API for headline scanning
- UPC lookup API needs to be provided by the user as they typically cost money to use

## Get started

* Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Scanning codes

1. Navigate to Camera tab and allow permission for Expo to use the camera
2. Hold camera in front of any bar/QR code
3. A modal will pop up showing the data scanned from the code

