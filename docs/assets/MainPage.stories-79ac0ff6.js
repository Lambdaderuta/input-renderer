var _=Object.defineProperty;var s=(n,r)=>_(n,"name",{value:r,configurable:!0});import{j as e,I as y}from"./InputRenderer-6a3116b3.js";import{r as t}from"./index-01bd6c53.js";import"./iframe-0d41178b.js";const P="_layout_1gi1a_2",b="_box_1gi1a_12",M="_title_1gi1a_24",x="_description_1gi1a_29",f="_form_1gi1a_34",j="_submit_1gi1a_41",a={layout:P,box:b,title:M,description:x,form:f,submit:j},i=s(({data:n})=>{const[r,c]=t.useState({}),[m,p]=t.useState(!0),d=t.useCallback(u=>{const o=Object.values(u);c(o),p(o.length<=0||o.some(g=>!g))},[]);return e.jsx("div",{className:a.layout,children:e.jsxs("div",{className:a.box,children:[e.jsx("div",{className:a.title,children:"Авторизация"}),e.jsxs("div",{className:a.description,children:["Для доступа к личному кабинету вашей ",e.jsx("br",{}),"компании авторизуйтесь на сайте"]}),e.jsxs("form",{className:a.form,action:"",children:[e.jsx(y,{inputRenderMap:n,onChange:d}),e.jsx("button",{className:a.submit,role:"button",disabled:m,children:"Войти"})]})]})})},"MainPage$1"),l=t.memo(i);try{i.displayName="MainPage",i.__docgenInfo={description:"",displayName:"MainPage",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"RenderMapItemType[]"}}}}}catch{}const S={title:"Pages/MainPage",component:l,parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{"main-page":{startLoc:{col:59,line:13},endLoc:{col:1,line:15},startBody:{col:59,line:13},endBody:{col:1,line:15}}}},layout:"fullscreen"}},C=s(n=>e.jsx(l,{...n}),"Template"),h=C.bind({});h.args={data:[{id:"email",type:"inputEmail",label:"Email"},{id:"password",type:"inputPassword",label:"Password"}]};const I=["MainPage"];export{h as MainPage,I as __namedExportsOrder,S as default};
//# sourceMappingURL=MainPage.stories-79ac0ff6.js.map
