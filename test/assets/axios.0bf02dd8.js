import{b as e,a as t,T as o,l as a}from"./function.90d190e6.js";import"./index.ab83b5f8.js";import{$ as r}from"./vant.1c522a55.js";import{r as s}from"./index.c2c83194.js";e.interceptors.request.use((e=>e),(e=>Promise.reject(e)));const n=function({isLock:n=!1,allUrl:c=!1,allSuccess:i=!1,url:l="",method:m="get",contentType:u="application/x-www-form-urlencoded; charset=UTF-8",data:d={},timeout:f=parseInt("20000"),timeShowLoadAnimation:g=555,success:p=function(){},fail:h=function(){}}={}){let S=null;if(n){if(S=t.md5(l+"_"+m+"_"+JSON.stringify(d)),t.getSessionStorage(S))return;t.setSessionStorage(S,!0)}let T=null,y=setTimeout((()=>{T=o.loading({message:"加载中...",forbidClick:!0,duration:0}),n&&t.removeSessionStorage(S)}),g),w={url:c?l:"http://82.156.70.219/muteki/api"+l,method:m,headers:{"Content-Type":u,token:t.getLocationStorage("token")},timeout:f};d.__t=(new Date).getTime(),u.includes("multipart/form-data")?w.data=d:"GET"===m.toUpperCase()?w.params=d:w.data=a.stringify(d,{indices:!1}),e(w).then((e=>{if(n&&t.removeSessionStorage(S),clearTimeout(y),null!=T&&T.clear(),c)try{p(e.data)}catch(o){console.error(o)}else if(401!==e.data.code)if(i)try{p(e.data)}catch(o){console.error(o)}else{if(200!==e.data.code)return r.errorMsg(e.data.msg),void function(e,t={}){console.warn(e);try{t instanceof Object?console.table(t):console.log(t)}catch(o){console.log("此浏览器不支持console.table()",o,"---错误详情:",t)}console.warn("↑↑以上为错误详情↑↑↑↑↑")}(`请求出错url:${l}`,e.data);try{p(e.data.data)}catch(o){console.error(o)}}else{r.errorMsg("登陆过期，自动登录中。。。");let e=setTimeout((()=>{clearTimeout(e),s.replace("login")}),3e3)}})).catch((o=>{if(n&&t.removeSessionStorage(S),clearTimeout(y),null!=T&&T.clear(),e.isCancel(o))try{h(o)}catch(a){console.error(a)}else{r.alert({title:"系统异常",message:`message:${o.message}\r\n url:${l}`}),console.warn(`请求失败url:${l}`,o);try{h(o)}catch(a){console.error(a)}}}))};export{n as m};
//# sourceMappingURL=axios.0bf02dd8.js.map
