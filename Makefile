# build script for Apache Cordova Firefox OS
# 	-pending directory is used as the staging directory of the mobile app

PORT_DEVICE = 6000
PORT_LOCAL = 6000
XPCSHELL ?= ~/Documents/mozilla/mozilla-central/obj-x86_64-apple-darwin11.4.2/dist/bin/xpcshell
ADB ?= adb
FOLDER = framework


all :: packaged install

package:
	cd ./${FOLDER} && zip -X ./application.zip ./* -x application.zip

packaged: package
	${ADB} push ./${FOLDER}/application.zip /data/local/tmp/b2g/${FOLDER}/application.zip

install:
	${ADB} forward tcp:$(PORT_LOCAL) tcp:$(PORT_DEVICE)
	@echo "Please confirm the remote debugging prompt on the phone!"
	${XPCSHELL} build/install.js ${FOLDER} $(PORT_LOCAL)
