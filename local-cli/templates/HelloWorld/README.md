##### 利用私有脚手架创建的工程，脚手架利用方式如下：

> npm uninstall -g react-native-cli

> npm install -g @zz-app/react-native-cli

> zhuan-react-native init <name> --version <0.44.0>

> cd name

##### 本地启动 

> npm run start 然后进入android studio 或者 xcode启动项目

> react-native run-ios

> react-native run-android

##### 打包

> sh bundlescript.sh

##### 打包（直接拆包）

> sh bundleSplit.sh

##### 额外注意事项

> 可以编辑base.android.js，定制化需要放到base bundle中的内容。