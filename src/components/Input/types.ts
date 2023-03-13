import { ChangeEvent } from 'react'

export interface InputPropsType {
    id: string
    type: string
    label: string
    placeholder?: string
    value: string
    defaultValue?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onClear?: (id: string) => void
}
