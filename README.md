Form Viewer App
===========

FormBuilder is a dynamic form building web application that works with dynamic forms and provides sharing functionality. It communicates to a Java Backend located in FormBuilderBackend repo.

### How to Build
1. Run `bower install`. This uses `bower.json` and install local dependencies.

2. Run `ionic serve`. This uses `ionic.xml` and will serve as local node server. Live updates when you make changes to the code.

3. Add the follow plugins using `cordova plugin add <PLUGIN_NAME>`
  - https://github.com/wildabeast/BarcodeScanner.git (NOTE: Only needed if planning to use QR Code component in deployed mobile application)
  - cordova-plugin-whitelist
  - cordova-plugin-splashscreen

    #### iOS ONLY - To add compatibility for iOS 9
    Install plugin `@telerik/cordova-plugin-wkwebview` and run `cordova ios prepare`
    Disable Bitcode in build by `Project > Build Settings > Build Options > Enable Bitcode = No`
    #### END - iOS ONLY

4. Run `cordova platform add android` or  `cordova platform add ios`

5. Run `ionic resources` to generate icons and splash screens from resources/icon.png and resources/splash.png

6. Run `cordova run android` or  `cordova run ios`

### Building for Production
Follow instructions [here](https://github.com/DataAnalyticsinStudentHands/DASH-Documentation/blob/master/Code%20Development/Frontend/How-to-Build-Mobile-Applications-for-Production.md), but before performing a `cordova build android --release` add [this file](https://gist.github.com/CarlSteven/3ec93b27003c3859c118) to {repo_base}\platforms\android\
