import{g as e,o as a,c as t,t as o,w as n,e as r,s as i,d as l,I as s}from"./index.12b81101.js";import{u as c,c as m,a as u}from"./interceptor.ab5a9c16.js";import{a as d}from"./index.2855972c.js";import{k as p,j as v,h as f,m as b,z as g,f as x,r as h,o as y,c as S,F as k,O as C,i as I,L as V,w as j}from"./vendor.cacf07dc.js";import{r as B,u as A}from"./use-route.681c85a7.js";var[T,_]=t("tabbar"),z=Symbol(T),N=n(p({name:T,props:{route:Boolean,fixed:o,border:o,zIndex:[Number,String],placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:{type:[Number,String],default:0},safeAreaInsetBottom:{type:Boolean,default:null}},emits:["change","update:modelValue"],setup(t,{emit:o,slots:n}){var r=v(),{linkChildren:i}=c(z),l=d(r,_),s=()=>{var o,{fixed:i,zIndex:l,border:s}=t;return f("div",{ref:r,style:e(l),class:[_({unfit:!(null!=(o=t.safeAreaInsetBottom)?o:t.fixed),fixed:i}),{[a]:s}]},[null==n.default?void 0:n.default()])};return i({props:t,setActive:e=>{e!==t.modelValue&&m({interceptor:t.beforeChange,args:[e],done(){o("update:modelValue",e),o("change",e)}})}}),()=>t.fixed&&t.placeholder?l(s):s()}})),[$,P]=t("tabbar-item"),w=n(p({name:$,props:r({},B,{dot:Boolean,icon:String,name:[Number,String],badge:[Number,String],iconPrefix:String}),emits:["click"],setup(e,{emit:a,slots:t}){var o=A(),n=b().proxy,{parent:r,index:c}=u(z);if(r){var m=g((()=>{var{route:a,modelValue:t}=r.props;if(a&&"$route"in n){var{$route:o}=n,{to:i}=e,s=l(i)?i:{path:i},m="path"in s&&s.path===o.path,u="name"in s&&s.name===o.name;return m||u}return(e.name||c.value)===t})),d=t=>{var n;r.setActive(null!=(n=e.name)?n:c.value),a("click",t),o()};return()=>{var{dot:a,badge:o}=e,{activeColor:n,inactiveColor:l}=r.props,c=m.value?n:l;return f("div",{class:P({active:m.value}),style:{color:c},onClick:d},[f(i,{dot:a,content:o,class:P("icon")},{default:()=>[t.icon?t.icon({active:m.value}):e.icon?f(s,{name:e.icon,classPrefix:e.iconPrefix},null):void 0]}),f("div",{class:P("text")},[null==t.default?void 0:t.default({active:m.value})])])}}}}));const F={name:"WeiTabbar",components:{[N.name]:N,[w.name]:w},props:{activeTab:{type:String,default:"home"}},setup:()=>({tabbar:x({list:[{title:"祝福",icon:"gift-o",name:"home"},{title:"音乐",icon:"music-o",name:"customize"}]})})},L=j(),O=L(((e,a,t,o,n,r)=>{const i=h("van-tabbar-item"),l=h("van-tabbar");return y(),S(l,{modelValue:t.activeTab,"onUpdate:modelValue":a[1]||(a[1]=e=>t.activeTab=e)},{default:L((()=>[(y(!0),S(k,null,C(o.tabbar.list,(e=>(y(),S(k,{key:e.name},[e.slot?(y(),S(i,{key:1,name:e.name,to:`/${e.name}`},{icon:L((a=>[f("img",{src:t.activeTab===e.name?e.activeImg:e.unActiveImg},null,8,["src"])])),default:L((()=>[f("span",null,V(e.title),1)])),_:2},1032,["name","to"])):(y(),S(i,{key:0,name:e.name,to:`/${e.name}`,icon:e.icon},{default:L((()=>[I(V(e.title),1)])),_:2},1032,["name","to","icon"]))],64)))),128))])),_:1},8,["modelValue"])}));F.render=O,F.__scopeId="data-v-dbf4c644";export default F;
