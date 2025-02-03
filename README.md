## Requirements

- [Android Studio Ladybug Feature Drop | 2024.2.2](https://developer.android.com/studio)
- [java 17.0.11 2024-04-16 LTS](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)
- [XCode 16.1 or up](https://developer.apple.com/xcode/)
- XCode Command Line Utils (`xcode-select --install`)
- [Cocoapods 1.16.2](https://medium.com/p-society/cocoapods-on-apple-silicon-m1-computers-86e05aa10d3e)
- [NVM & Node v18.20.4 & NPM](https://dev.to/httpjunkie/setup-node-version-manager-nvm-on-mac-m1-7kl)

## Installation

```bash
# install deps
$ yarn install
```

## Test

```bash
# run tests
$ yarn test
```

## Run Application

```bash
$ yarn start

# run ios app in production
$ yarn ios

# run ios app in qa
$ yarn ios:qa

# run ios app in development
$ yarn ios:dev

# run android app in production
$ yarn android

# run android app in qa
$ yarn android:qa

# run android app in development
$ yarn android:dev

```

## Generate apk and abb for production

```bash
# generate apk  release
$ yarn android:prod-release
# generate .abb  release
$ yarn android:prod-release-bundle


```
