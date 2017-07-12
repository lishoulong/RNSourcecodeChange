rm -rf ./output
mkdir output
cd output
mkdir android
mkdir ios
npm run androidsplitbundle
npm run iossplitbundle