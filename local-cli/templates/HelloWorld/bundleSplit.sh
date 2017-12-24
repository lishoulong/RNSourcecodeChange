#!/bin/bash

mkdir dist
npm run androidSplit
npm run iosSplit

# rm -rf android/app/src/main/assets/bundle/*
# cp -R build/bundle-output/split/* android/app/src/main/assets/bundle