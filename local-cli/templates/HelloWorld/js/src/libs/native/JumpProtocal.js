/**
 * 文档URL  http://dashen.58corp.com/pages/viewpage.action?pageId=4693639#id-统跳协议-统跳协议的接入
 * 统跳列表  http://dashen.58corp.com/pages/viewpage.action?pageId=5570600
 *
 * */


/**
 * @param {Object} opts - 配置
 *                          key - 统跳key路径
 *                          params - 参数
 * @return {String} 生成完整的统跳协议
 * */
export const getJumpProtocal = opts => {
  let query = '', path = opts.key ? opts.key : '';

  if(!path){
      return null;
  }
  if(opts.params){
      for(let key in opts.params){
          query = `&${key}=${opts.params[key]}`;
      }
      query = query.substr(1);
  }

  return `zhuanzhuan://jump/core/${path}/jump?${query}`;
};

export const parseObj = params => {
    let query = '';
    if(params){
          for(let key in params){
              let value = encodeURIComponent(params[key]);
              query += `&${key}=${value}`;
          }
      }
     return query;
}