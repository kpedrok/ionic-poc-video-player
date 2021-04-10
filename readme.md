# Steps

### Create project

- ionic start APP_NAME blank --capacitor

### Update capacitor to latest version

- npm install @capacitor/cli@next @capacitor/core@next

### build app

- ionic build

### Adding the iOS Platform

- npm install @capacitor/ios@next
- npx cap add ios
- npx cap open ios
- ng build && npx cap copy ios && npx cap run ios --target 150812F7-D1D7-4E9D-A5A0-F9E37CDA4BB4
  OR
- ionic cap run ios / ionic cap run ios --livereload --external

### Adding the iOS Platform

- npm install @capacitor/android@next
- npx cap add android
- ionic cap run android
