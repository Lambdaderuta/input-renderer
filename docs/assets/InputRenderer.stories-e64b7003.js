var o=Object.defineProperty;var n=(e,r)=>o(e,"name",{value:r,configurable:!0});import{I as t,j as a}from"./InputRenderer-6a3116b3.js";import"./index-01bd6c53.js";import"./iframe-0d41178b.js";const u={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as InputRendererComponent } from '../InputRenderer'

export default {
    title: 'InputRenderer',
    component: InputRendererComponent,
} as ComponentMeta<typeof InputRendererComponent>

const Template: ComponentStory<typeof InputRendererComponent> = (args) => (
    <InputRendererComponent {...args} />
)

export const InputRenderer = Template.bind({})

InputRenderer.args = {
    inputRenderMap: [
        {
            id: 'first_name',
            type: 'inputText',
            label: 'First Name',
            defaultValue: 'Some first name',
        },
        {
            id: 'last_name',
            type: 'inputText',
            label: 'Last Name',
        },
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
`,locationsMap:{"input-renderer":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"InputRenderer",component:t},p=n(e=>a.jsx(t,{...e}),"Template"),s=p.bind({});s.args={inputRenderMap:[{id:"first_name",type:"inputText",label:"First Name",defaultValue:"Some first name"},{id:"last_name",type:"inputText",label:"Last Name"},{id:"email",type:"inputEmail",label:"Email"},{id:"password",type:"inputPassword",label:"Password"}]};const c=["InputRenderer"];export{s as InputRenderer,c as __namedExportsOrder,u as default};
//# sourceMappingURL=InputRenderer.stories-e64b7003.js.map
