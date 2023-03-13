import { FieldVariant } from './constants'

import type { RenderMapItemType } from './types'

export const getInputType = (value: string) => {
    switch (value) {
        case FieldVariant.TEXT:
            return 'text'
        case FieldVariant.PASSWORD:
            return 'password'
        case FieldVariant.EMAIL:
            return 'email'
        default:
            return 'text'
    }
}

export const getPlaceHolder = (value: string) => {
    switch (value) {
        case FieldVariant.TEXT:
            return ''
        case FieldVariant.PASSWORD:
            return 'Введите пароль'
        case FieldVariant.EMAIL:
            return 'admin@user.com'
        default:
            return ''
    }
}

export const constructInitialState = (items: RenderMapItemType[]) => {
    return items.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.id]: curr.defaultValue ?? '',
        }
    }, {})
}
