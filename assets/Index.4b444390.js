import{I as o}from"./index.dab47157.js";import{j as e,l as t,t as l,r as c,C as s,D as n,o as r,c as a,h as d,w as m}from"./vendor.0f092f4c.js";const p={name:"WeiBackTop",components:{[o.name]:o},props:{offset:{type:Number,default:60}},setup(){let o=e(0);const c=()=>{o.value=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop};return t((()=>{window.addEventListener("scroll",c)})),l((()=>{window.removeEventListener("scroll",c)})),{click:()=>{let o=setInterval((()=>{let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(0>=e)return void clearInterval(o);let t=e-Math.floor(e/5);t=5>=t?0:t,document.documentElement.scrollTop=document.body.scrollTop=t}),20)},scrollTop:o}}},f=m()(((o,e,t,l,m,p)=>{const f=c("van-icon");return s((r(),a("div",{class:"back-top",onClick:e[1]||(e[1]=(...o)=>l.click&&l.click(...o))},[d(f,{name:"back-top",size:"27",color:"#fff"})],512)),[[n,t.offset<=l.scrollTop]])}));p.render=f,p.__scopeId="data-v-5622de76";export default p;
