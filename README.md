cordova-firefoxos
=====================

Apache Cordova Firefox OS implementation

Prerequisites:
- Android SDK must be installed
- on Mac OSX you need to have Xcode & the Command Line Tools for Xcode
- on Windows you need to have CYGWIN
- Firefox OS device with OS Version 1.0.0.0 prerelease or Firefox OS simulator add-on

How to get started:
=====================

1. Install XULRunner, instructions can be found here: https://developer.mozilla.org/en-US/docs/XULRunner
2. Bootstrap your computer so to make sure that you have all the prerequisites for building Firefox
- instructions can be found under the "Build prerequisites" section on the following page: https://developer.mozilla.org/en-US/docs/Simple_Firefox_build
3. Clone the Firefox repository: git clone git://github.com/mozilla/mozilla-central.git
4. Build Firefox by following the instructions under the "Building" on the following page: https://developer.mozilla.org/en-US/docs/Simple_Firefox_build
5. Clone the cordova-firefoxos repository
6. Modify the XPCSHELL constant in the Makefile to point to the location of xpcshell on your computer

Deploying to device:

7a. Make sure the Firefox OS device has remote debugging enabled. To enable remote debugging navigate to the following settings on the device: Settings->Device Information->More Information->Developer->Remote Debugging.
8a. Run the Makefile by typing "make" into the command line.

Deploying to simulator:


