# Case study - React Native

## 1. Technology and Platform
The React Native is a framework found by Facebook, it let you build mobile application using JavaScript. It’s based on React, Facebook’s JavaScript library and targets mobile platforms. Using React Native, web developers can create mobile applications natively. What's more, since most of the code can be shared between platforms, React Native can develop applications for both Android and iOS.
### a. Coding language and will you use it today?
The coding language I'm using is JavaScript with React. If the project is started today, I will still use React Native, since React Native can let you build a mobile application without considering the operation system like iOS or Android. Compared to Swift, Kotlin and Java, React is the best choice if the App is simple and no security requirement. However, if you want to build a professional App and the application security is important, then the professional programming languages are better choices because React Native is JavaScript based library which is famous for its fragility. In a word, for the in class peoject, the React Native is enough.
### b. Build system and build environment?
To build a React Native App, you'll need:
* Node.js package manager ([npm](https://www.npmjs.com/))
* [Node 8+](https://nodejs.org/en/download/)
* React Native command line interface: Expo CLI
```
Installing by:
npm install -g expo-cli
```
* Java Development Kit (JDK 8 or newer)
* Built-in emulator in [Android Studio](https://developer.android.com/studio/)
* IDE (I prefer [VScode](https://code.visualstudio.com/))
### c. Frameworks and libraries.
The [libraries](https://github.com/facebook/react-native) are pending

## 2. Testing
### a. How to ensure the testing is meaningful? Any code coverage metrics for example?
To ensure the testing is meaningful, React Native is using [Istanbul](https://istanbul.js.org/）a JS code coverage tool to do the code coverage.
### b and c. CI platform(s)? What computing platform combinations are tested on their CI?
React Native is using [CircleCI](https://circleci.com/) and [AppVeyor](https://www.appveyor.com/) to do the Continuous Integration.
* CircleCI: Support Docker, Linux, Android, and all apple devices(including macOS, iOS, tvOS, and watchOS).
* AppVeyor: Support Windows and Linux.

## 3. Software Architecture
Instead of rendering to the browser’s DOM, React Native invokes Objective-C APIs to render to iOS components, or Java APIs to render to Android components. This sets React Native apart from other cross-platform app development options, which often end up rendering web-based views.

The way of realize these functions is because of the “bridge,” which provides React with an interface into the host platform’s native UI elements. The bridge is the concept that provides a way for bidirectional and asynchronous communications between these two universes. 

<img src="https://cdn-images-1.medium.com/max/1600/1*JT_Smf1u3fJTBY8ev9WAzg.png" />

Although React Native and operation Systems are completely written in different technologies, they are able to communicate. React components return markup from their render function, which describes how they should look. With React for the Web, this translates directly to the browser’s DOM. For React Native, this markup is translated to suit the host platform, so a <View> might become an Android-specific TextView.
  
<img src="https://cdn-images-1.medium.com/max/800/1*sucxk9LMqW9booBv4f02cg.png" />

Currently, React Native only supports iOS and Android, but in theory introduced above, it can also support other operation systems as long as you write correct bridges.

## Reference
* https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch01.html
* https://www.quora.com/How-does-React-Native-work
