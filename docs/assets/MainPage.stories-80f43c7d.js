var $=Object.defineProperty;var a=(e,n)=>$(e,"name",{value:n,configurable:!0});import{j as s,I as W}from"./InputRenderer-71bf66b8.js";import{r as x}from"./index-20634d73.js";import{c as _}from"./iframe-e5d48ca9.js";var w="Expected a function",O=0/0,A="[object Symbol]",D=/^\s+|\s+$/g,G=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,H=/^0o[0-7]+$/i,U=parseInt,V=typeof _=="object"&&_&&_.Object===Object&&_,X=typeof self=="object"&&self&&self.Object===Object&&self,z=V||X||Function("return this")(),J=Object.prototype,K=J.toString,Q=Math.max,Y=Math.min,h=a(function(){return z.Date.now()},"now");function Z(e,n,o){var c,m,f,l,r,i,p=0,C=!1,g=!1,j=!0;if(typeof e!="function")throw new TypeError(w);n=N(n)||0,T(o)&&(C=!!o.leading,g="maxWait"in o,f=g?Q(N(o.maxWait)||0,n):f,j="trailing"in o?!!o.trailing:j);function M(t){var d=c,b=m;return c=m=void 0,p=t,l=e.apply(b,d),l}a(M,"invokeFunc");function L(t){return p=t,r=setTimeout(y,n),C?M(t):l}a(L,"leadingEdge");function R(t){var d=t-i,b=t-p,E=n-d;return g?Y(E,f-b):E}a(R,"remainingWait");function S(t){var d=t-i,b=t-p;return i===void 0||d>=n||d<0||g&&b>=f}a(S,"shouldInvoke");function y(){var t=h();if(S(t))return I(t);r=setTimeout(y,R(t))}a(y,"timerExpired");function I(t){return r=void 0,j&&c?M(t):(c=m=void 0,l)}a(I,"trailingEdge");function F(){r!==void 0&&clearTimeout(r),p=0,c=i=m=r=void 0}a(F,"cancel");function B(){return r===void 0?l:I(h())}a(B,"flush");function P(){var t=h(),d=S(t);if(c=arguments,m=this,i=t,d){if(r===void 0)return L(i);if(g)return r=setTimeout(y,n),M(i)}return r===void 0&&(r=setTimeout(y,n)),l}return a(P,"debounced"),P.cancel=F,P.flush=B,P}a(Z,"debounce");function T(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}a(T,"isObject");function ee(e){return!!e&&typeof e=="object"}a(ee,"isObjectLike");function ne(e){return typeof e=="symbol"||ee(e)&&K.call(e)==A}a(ne,"isSymbol");function N(e){if(typeof e=="number")return e;if(ne(e))return O;if(T(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=T(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(D,"");var o=q.test(e);return o||H.test(e)?U(e.slice(2),o?2:8):G.test(e)?O:+e}a(N,"toNumber");var te=Z;const ae="_layout_1gi1a_2",re="_box_1gi1a_12",oe="_title_1gi1a_24",ie="_description_1gi1a_29",se="_form_1gi1a_34",ce="_submit_1gi1a_41",u={layout:ae,box:re,title:oe,description:ie,form:se,submit:ce},v=a(({data:e})=>{const[n,o]=x.useState({}),[c,m]=x.useState(!0),f=te(r=>{o(r),m(r.length<=0||r.some(i=>!i)),console.log(n)},300),l=x.useCallback(r=>{const i=Object.values(r);f(i)},[]);return s.jsx("div",{className:u.layout,children:s.jsxs("div",{className:u.box,children:[s.jsx("div",{className:u.title,children:"Авторизация"}),s.jsxs("div",{className:u.description,children:["Для доступа к личному кабинету вашей ",s.jsx("br",{}),"компании авторизуйтесь на сайте"]}),s.jsxs("form",{className:u.form,action:"",children:[s.jsx(W,{inputRenderMap:e,onChange:l}),s.jsx("button",{className:u.submit,role:"button",disabled:c,children:"Войти"})]})]})})},"MainPage$1"),k=x.memo(v);try{v.displayName="MainPage",v.__docgenInfo={description:"",displayName:"MainPage",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"RenderMapItemType[]"}}}}}catch{}const ge={title:"Pages/MainPage",component:k,parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as MainPageComponent } from '../MainPage'

export default {
    title: 'Pages/MainPage',
    component: MainPageComponent,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof MainPageComponent>

const Template: ComponentStory<typeof MainPageComponent> = (args) => (
    <MainPageComponent {...args} />
)

export const MainPage = Template.bind({})

MainPage.args = {
    data: [
        {
            id: 'email',
            type: 'inputEmail',
            label: 'Email',
        },
        {
            id: 'password',
            type: 'inputPassword',
            label: 'Password',
        },
    ],
}
`,locationsMap:{"main-page":{startLoc:{col:59,line:13},endLoc:{col:1,line:15},startBody:{col:59,line:13},endBody:{col:1,line:15}}}},layout:"fullscreen"}},le=a(e=>s.jsx(k,{...e}),"Template"),de=le.bind({});de.args={data:[{id:"email",type:"inputEmail",label:"Email"},{id:"password",type:"inputPassword",label:"Password"}]};const be=["MainPage"];export{de as MainPage,be as __namedExportsOrder,ge as default};
//# sourceMappingURL=MainPage.stories-80f43c7d.js.map
