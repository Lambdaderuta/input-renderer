import { ComponentStory, ComponentMeta } from '@storybook/react'

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
