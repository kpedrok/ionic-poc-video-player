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

# Links

### Capacitor Video Player Plugin (2021-04)

- https://github.com/jepiqueau/capacitor-video-player

### Capacitor Youtube Player (2021-03)

- https://github.com/abritopach/capacitor-youtube-player

### How to Integrate Video Player in Ionic 5 App with Cordova Video Player Plugin (2021-03)

- https://www.positronx.io/integrate-video-player-in-ionic-app-with-cordova-video-player-plugin/

### Cordova Video Player (2020-11)

- https://ionicframework.com/docs/native/video-player

### Ionic Video Player for Mobile and Web using Capacitor Video Player Plugin (2020-08)

- https://www.ngdevelop.tech/ionic-capacitor-video-player-mobile-and-web/

### How to stream YouTube videos with Ionic 5

- https://www.youtube.com/watch?v=AyS3uw7HZOM
- https://www.youtube.com/watch?v=psjQUHCoUY8

### Playing videos with Ionic 5 and Cordova Video Player plugin (2020-05)

https://www.techiediaries.com/ionic-video-playing/

### Add Offline, Online Video Player in Ionic 5 Angular Application using Cordova Plugin (2020-05)

https://www.freakyjolly.com/ionic-video-player-tutorial/

### Building an Automatic Ionic Video Feed like Facebook (2020-03)

- https://www.youtube.com/watch?v=qQYuVfAJ4zY

### Enappd

- https://enappd.com/blog/adding-video-player-in-ionic-4-app/
