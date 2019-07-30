# CollegePool

## Setup
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4. First, clone the repo to your local machine. To run, first execute `npm install` in the root folder. Then, run 'npm install' in the backend folder to install all dependencies. To run the app, execute `npm run dev` in the backend folder to start the mongo server and database. Errors such as `failed to open minidump file` may be temporarily solved by deleting the db folder in CollegePool\backend\data and rerunning the mongod command. 

## Web App
Running `npm start` in the root folder will start a dev server on `http://localhost:4200/` that will serve as an entry point to the web version of Collegepool.

## Mobile 

To run the mobile app, first install all the necessary Nativescript components, which can be found on the Nativescript website. The required dependices for Android development involves downloading Java 8+, Nativescript 5.4.2, and the Android SDK. Instructions specific for Windows also need to set the path for the two enviroment variables: ANDROID_HOME to be: AppData\Local\Android\Sdk and JAVA_HOME to be: C:\Program Files\Java\jdk-10.0.2. These path can vary depending on how these files were installed, but should point to the same files. After installing all the required Nativescript files, running the mobile app involves following the steps in Setup before running executing `npm run android` in the root folder with a connected Android device or Android emulator running.

## Current Issues/ToDos
* Update font on forgetPassword field
* Autoupdate History
* Add in Login verification
* Add bad word filter
* Increase settings page efficiency
* Increase make a post page efficiency
* Delete Post button
* Edit Post button
* Post Layout Redesign
* Filter posts
* Search Posts
* IOS testing
* Testing on different devices
* Add posting API


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
