# build script for Apache Cordova Firefox OS
# 	-pending directory is used as the staging directory of the mobile app

MKPATH = mkdir -p
RMPATH = rm -rf
UNAME := $(shell name)

all :: clean create copy

# remove the pending directory & all of its contents
clean:
	$(RMPATH) pending

# create pending directory
create:
	$(MKPATH) pending

# copy all contents of framework directory to pending directory
copy:
ifeq ($(UNAME), Linux)
	rsync -av --exclude=".*" framework pending
	#	cp -r framework pending
else
ifeq ($(UNAME), Darwin)
# Mac OSX
	rsync -av --exclude=".*" framework pending
else
# assume windows
	# TODO: make sure hidden files not copied
endif