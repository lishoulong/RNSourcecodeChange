import {NativeModules, Platform} from 'react-native';
import { getJumpProtocal, parseObj } from './JumpProtocal';
/*
 * 打开webview页面,统跳协议
 * url: string
 */
export const openUrl = (uri) => {
    const testUrl = /^http|https/,
          testZhuan = /^zhuanzhuan:/;
    let encodeUrl = '';
    if(testUrl.test(uri) && !testZhuan.test(uri)){
        //encodeUrl = `zhuanzhuan://jump/core/web/jump?uri=${encodeURIComponent(uri)}`;
        const url = encodeURIComponent(uri),
            key = 'web',
            params = { url };
        encodeUrl = getJumpProtocal({ key, params });
    }else {
        encodeUrl = uri;
    }
    NativeModules.ZZRCTRouterManager.openUrl(encodeUrl);
}

/*
 * 打开RN页面,统跳协议
 * url: string
 */
export const openRN = (params) => {
    let {moduleName, url, ...otherParams} = params;
    let queryParts = '',
        encodeUrl = '';
    url = encodeURIComponent(url);
    if(otherParams) {
        queryParts = parseObj(otherParams);
    }
    encodeUrl = `zhuanzhuan://jump/core/rn/jump?moduleName=${moduleName}&downgradeUrl=${url}${queryParts}`
    NativeModules.ZZRCTRouterManager.openUrl(encodeUrl);
}

/*
 * 关闭react-native页面
 */
export const closeRN = () => {
    NativeModules.ZZRCTCommonUIManager.closeRN();
}
/*
 * native的乐高埋点
 * pageType : String
 * actionType: String
 * params: Object
 */
export const leStatic = (actionType = "", params = {}) => {
    NativeModules.ZZRCTLegoReportManager.report("ZHUANZHUANM", actionType, params)
}

/*
 * native的toast弹窗
 * message: String
 * callback: Function
 */
export const toast = (message, callback) => {
    NativeModules.ZZRCTToastManager.toast(message, callback);
}

export const getUserInfo = (callBack) => {
    NativeModules.ZZRCTCommonManager.getUser(callback)
}
