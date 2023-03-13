import { ComponentStory, ComponentMeta } from '@storybook/react'

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
