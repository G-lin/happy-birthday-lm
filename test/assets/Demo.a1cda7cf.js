import{t as e,o as t,c as a,w as r,a as l,d as s}from"./index.ab83b5f8.js";import{N as i}from"./index.52cdef72.js";import{B as n,$ as o}from"./vant.1c522a55.js";import{C as u}from"./index.4ab86201.js";import{a as c}from"./function.90d190e6.js";import{m as d}from"./axios.0bf02dd8.js";import{j as p,g as m,q as f,F as v,v as k,w as h,f as g,k as x,m as y,r as b,o as j,c as S,H as C,h as L,I as w}from"./vendor.64c8d20c.js";import{c as N,r as R}from"./on-popup-reopen.ca56adb1.js";import"./interceptor.223c8325.js";import"./use-route.6524b53e.js";import"./index.c2c83194.js";var[W,D]=a("cell-group"),F=r(p({name:W,inheritAttrs:!1,props:{title:String,inset:Boolean,border:e},setup(e,{slots:a,attrs:r}){var l=()=>m("div",f({class:[D({inset:e.inset}),{[t]:e.border&&!e.inset}]},r),[null==a.default?void 0:a.default()]);return()=>e.title||a.title?m(v,null,[m("div",{class:D("title",{inset:e.inset})},[a.title?a.title():e.title]),l()]):l()}})),[M,B]=a("circle"),z=0;function O(e){return Math.min(Math.max(+e,0),100)}var _=r(p({name:M,props:{text:String,size:[Number,String],color:[String,Object],clockwise:e,layerColor:String,strokeLinecap:String,currentRate:{type:Number,default:0},speed:{type:[Number,String],default:0},fill:{type:String,default:"none"},rate:{type:[Number,String],default:100},strokeWidth:{type:[Number,String],default:40}},emits:["update:currentRate"],setup(e,{emit:t,slots:a}){var r="van-circle-"+z++,i=k((()=>+e.strokeWidth+1e3)),n=k((()=>function(e,t){var a=e?1:0;return"M "+t/2+" "+t/2+" m 0, -500 a 500, 500 0 1, "+a+" 0, 1000 a 500, 500 0 1, "+a+" 0, -1000"}(e.clockwise,i.value)));h((()=>e.rate),(a=>{var r,l=Date.now(),s=e.currentRate,i=O(a),n=Math.abs(1e3*(s-i)/+e.speed),o=()=>{var e=Date.now(),a=Math.min((e-l)/n,1)*(i-s)+s;t("update:currentRate",O(parseFloat(a.toFixed(1)))),(i>s?a<i:a>i)&&(r=R(o))};e.speed?(r&&N(r),r=R(o)):t("update:currentRate",i)}),{immediate:!0});var o=()=>{var{strokeWidth:t,currentRate:a,strokeLinecap:l}=e,i=3140*a/100,o=s(e.color)?"url(#"+r+")":e.color,u={stroke:o,strokeWidth:+t+1+"px",strokeLinecap:l,strokeDasharray:i+"px 3140px"};return m("path",{d:n.value,style:u,class:B("hover"),stroke:o},null)},u=()=>{var{color:t}=e;if(s(t)){var a=Object.keys(t).sort(((e,t)=>parseFloat(e)-parseFloat(t))).map(((e,a)=>m("stop",{key:a,offset:e,"stop-color":t[e]},null)));return m("defs",null,[m("linearGradient",{id:r,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[a])])}};return()=>{return m("div",{class:B(),style:l(e.size)},[m("svg",{viewBox:"0 0 "+i.value+" "+i.value},[u(),(t={fill:e.fill,stroke:e.layerColor,strokeWidth:e.strokeWidth+"px"},m("path",{class:B("layer"),style:t,d:n.value},null)),o()]),a.default?a.default():e.text?m("div",{class:B("text")},[e.text]):void 0]);var t}}})),[I,P]=a("divider"),U=r(p({name:I,props:{dashed:Boolean,hairline:e,contentPosition:{type:String,default:"center"}},setup:(e,{slots:t})=>()=>m("div",{role:"separator",class:P({dashed:e.dashed,hairline:e.hairline,["content-"+e.contentPosition]:!!t.default})},[null==t.default?void 0:t.default()])}));const q={name:"Demo",components:{[_.name]:_,[U.name]:U,[F.name]:F,[i.name]:i,[n.name]:n,[u.name]:u},setup(){const e=g([{title:"uuid",value:"生成uuid",click:()=>{e[0].value=c.createUUID()}},{title:"alert",value:"",click:()=>{o.alert({message:"vant的弹窗组件",confirm(){e[1].value="vant弹窗组件"}})}},{title:"confirm",value:"",click:()=>{o.confirm({message:"vant的确认框组件",confirm(){e[2].value="您点了确认"},cancel(){e[2].value="您点了取消"}})}},{title:"axios",value:"",click:()=>{d({url:"/login",method:"post",success(e){o.alert({message:JSON.stringify(e)})}})}}]),t=y();return x((()=>{console.log("hyper muteki")})),{funList:e,navLeftClick:()=>{t.go(-1)}}}},A=w("小型按钮");q.render=function(e,t,a,r,l,s){const i=b("van-nav-bar"),n=b("van-button"),o=b("van-circle"),u=b("van-cell-group"),c=b("van-cell");return j(),S(v,null,[m(i,{title:"demo","left-text":"返回","left-arrow":"",onClickLeft:r.navLeftClick},null,8,["onClickLeft"]),m(u,{title:"vant组件"},{default:C((()=>[m(n,{type:"primary",size:"small"},{default:C((()=>[A])),_:1}),m(o,{currentRate:1e3,speed:1e3,color:{"0%":"#3fecff","100%":"#6149f6"},text:"1000%"})])),_:1}),m(u,{title:"常用方法"},{default:C((()=>[(j(!0),S(v,null,L(r.funList,((e,t)=>(j(),S(c,{key:t,title:e.title,value:e.value,onClick:t=>e.click()},null,8,["title","value","onClick"])))),128))])),_:1})],64)};export default q;
//# sourceMappingURL=Demo.a1cda7cf.js.map
