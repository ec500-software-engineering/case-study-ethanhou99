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

Firstly I want to introduce the concept of component. Sometimes it is a challange to build a website or create a mobile app. React Native provides a simple solution tp simplelify thr design progress by using components. Imagine the login page of the application, there are some input boxes, an 'login' button and a 'return' button, each one of these can be designed as a component. By this solution, a big complicated project can be separated to many small components, it is much easier for the developers to design a project and it is also easier for them to maintenance their product

<img src="https://rationalappdev.com/wp-content/uploads/2017/08/Components-1.png" />
* An example of components in a block-chain app.

Instead of rendering to the browser’s DOM, React Native invokes Objective-C APIs to render to iOS components, or Java APIs to render to Android components. This sets React Native apart from other cross-platform app development options, which often end up rendering web-based views.

The way of realize these functions is because of the “bridge,” which provides React with an interface into the host platform’s native UI elements. The bridge is the concept that provides a way for bidirectional and asynchronous communications between these two universes. 

<img src="https://cdn-images-1.medium.com/max/1600/1*JT_Smf1u3fJTBY8ev9WAzg.png" />

Although React Native and operation Systems are completely written in different technologies, they are able to communicate. React components return markup from their render function, which describes how they should look. With React for the Web, this translates directly to the browser’s DOM. For React Native, this markup is translated to suit the host platform, so a <View> might become an Android-specific TextView.
  
<img src="https://cdn-images-1.medium.com/max/800/1*sucxk9LMqW9booBv4f02cg.png" />

Currently, React Native only supports iOS and Android, but in theory introduced above, it can also support other operation systems as long as you write correct bridges.

## 4. Defects
1. [Issue #24112](https://github.com/facebook/react-native/issues/24112)
In this issue, when people create a new project using `react-native init test` and run using `react-native run-android`. The project was succesfully compiled but when it starts the React Native will response error code 500. This issue happens from React Native@ 0.58.6 to 0.59.1.

- A temporary solution is run `react-native start --reset-cache` in one terminal and left it open and run `react-native run-android` in another terminal. This issue requires a architecture change and had been fixed over [there](https://github.com/facebook/react-native/commit/392b0845ce624de0632721c67d349455e5029715#diff-fe2ea122979e8bb9729dff893828ae61)).

2. [Issue #24107](https://github.com/facebook/react-native/issues/24107)
In this issue, while people initializing a new React Native project using `react-native init`, the system will response:

<img src="https://user-images.githubusercontent.com/30745904/54856212-01fad580-4d02-11e9-9897-ddc73bb5a7c9.PNG" />

- This issue happends in the version of 0.59.1, and a temporary solution is using command  `react-native init awesomeApplication --version "0.58.6"` .

- This issue doesn't require architecture change and had been fixed over [there](https://github.com/react-native-community/react-native-cli/commit/e0f67e097367a922524fe4f144a2355306285456).


## 5. Demonstration Application - Calculator

The calculator can calculate basic equations and here is the result:

<img src="https://github.com/ec500-software-engineering/case-study-ethanhou99/blob/master/calculator.png" />

To run the calculator, you need to download xcode and ios simulator to your laptop.
Then install the React Native:

Assuming that you have `Node 10+` installed, you can use npm to install the Expo CLI command line utility:
```
npm install -g expo-cli
```
Then run the following commands to create a new React Native project called "AwesomeProject":

```
expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```
This will start a development server for you.

## Reference
* https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch01.html
* https://www.quora.com/How-does-React-Native-work
