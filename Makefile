# build script for Apache Cordova Firefox OS
# 	-pending directory is used as the staging directory of the mobile app

# TODO: hostname should be retrieved from a config file
HOSTNAME = framework.com
MKPATH = mkdir -p
RMPATH = rm -rf
UNAME := $(shell uname)

all :: clean create copy rename

# remove the pending directory & all of its contents
clean:
	$(RMPATH) pending

# create pending directory
create:
	$(MKPATH) pending

# copy all contents of framework directory to pending directory
copy:
ifeq ($(UNAME), Linux)
#	rsync -av --exclude=".*" framework pending
	cp -r framework pending
else
ifeq ($(UNAME), Darwin)
# Mac OSX
#	rsync -av --exclude=".*" framework pending
	cp -r framework pending
else
# assume windows
# TODO: make sure hidden files not copied
endif
endif

# rename the framework directory to use the hostname
rename:
	mv pending/framework pending/$(HOSTNAME)