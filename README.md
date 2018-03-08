# »Grid«-App for COBI.bike

The »Grid«-App displays driving and trip statistics and allows to customize their appearance.
Its part of a collection of Open Source [modules](https://cobi.bike/devkit) for [COBI.bike](https://cobi.bike).

![COBI.bike Grid App](https://cobi.bike/sites/default/files/cobi-assets/cobi-devkit-demo-grid-small.jpg)

## Quickstart: Interactive Demo

The quickest way to test the app without any setup:

[<img src="https://raw.githubusercontent.com/cobi-bike/DevKit/master/resources/open-demo-btn.png" width="170px" alt="Open demo button">](https://glitch.com/edit/#!/import/github/cobi-bike/Module-Grid)

## Installation and Setup

You can easily deploy the app on you own:

### Step 1: Clone repository

Clone this repository and install Node.js dependencies with:

``` bash
npm install
```  

### Step 2: Install COBI.bike DevKit

Follow the [instructions](https://github.com/cobi-bike/DevKit#-test-your-module) to install the COBI.bike Google Chrome Simulator and get familiar with the basics of app development on the COBI plattform.


### Step 3: Run Node.js server

The app is accessible under [localhost:8888](http://localhost:8888/) after starting the Node.js server with:
``` bash
PORT=8888 node server.js
```  
The settings menu can be accessed with the [?state=edit](http://localhost:8888/?state=edit) suffix.


## Useful DevKit links

### Debugging Tips & Tricks

* For seing javascript errors in the native App, activate the "Show module errors" option in the "Diagnostics" section
* To get better error messages when interacting with the `COBI.js` API, include `https://cdn.cobi.bike/cobi.js/0.34.1/cobi.dev.js` instead of the script mentioned above (**please note:** the dev version is considerably larger which has a big impact on the loading time)
* To show a native dialog when running inside the iOS App, just use a normal `alert("your messages")` (only for debugging)
* When developing in Chrome, use the phone button in the upper left corner of the Chrome Developer Tools and rotate it to landscape to see how it looks while riding 
* When using the Chrome Simulator, press the `Print state to console` button to print the current `COBI.js` state to the Chrome Developer Tools Console

### Inspiration & Examples

* Get inspired by our showcases on the [COBI.bike DevKit site](https://cobi.bike/devkit)
* Take a testride with one of our example modules in the COBI.bike iOS app. Requires registration as a developer on [my.cobi.bike](https://my.cobi.bike)
* Visit our [Showtime Developer Forum](https://forums.cobi.bike/c/showtime) for additional inspiration from the developer community

### Interface Guidelines

Read our [Interface Guidelines](interface-guidelines.md) to understand the unique challenges of developing software for bikes and to learn more about how the COBI.bike system and modules work.

### More DevKit Resources

- [FAQ](FAQ.md)
- [Developer Forums](https://forums.cobi.bike)
- [COBI.bike DevKit Chrome Extension on Chrome Web Store](https://chrome.google.com/webstore/detail/cobi-devkit-simulator/hpdhkapigojggienmiejhblkhenjdbno)
- [COBI.bike DevKit Chrome Extension on Github](https://github.com/cobi-bike/COBI.js-simulator)
- [COBI.bike DevKit UI Components](https://github.com/cobi-bike/DevKit-UI)
- [`COBI.js` reference](https://cobi-bike.github.io/COBI.js/)

### Other Tools & Resources

- [Glitch](https://glitch.com/) – friendly community where you'll build the app of your dreams
- [CodePen](https://codepen.io/) – social development environment for front-end designers and developers

## Contributing to this project

Anyone and everyone is welcome to contribute to this project, the [DevKit Simulator](https://github.com/cobi-bike/DevKit-Simulator) and the [COBI.bike DevKit UI Components](https://github.com/cobi-bike/DevKit-UI). Please take a moment to review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

Copyright © 2018 COBI.bike GmbH
