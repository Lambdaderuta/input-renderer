import { FC, memo } from 'react'
import { Icon } from '@iconify/react'

import type { InputPropsType } from './types'

import styles from './input.module.scss'

const Input: FC<InputPropsType> = ({
    id,
    type,
    label,
    defaultValue = '',
    value,
    placeholder,
    onChange,
    onClear = () => {},
}) => {
    const onClearClick = () => {
        onClear(id)
    }

    return (
        <label className={styles.label} id={id} htmlFor={label}>
            {label}:
            <input
                className={styles.input}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
            {!!value && (
                <button className={styles.closeButton} onClick={onClearClick}>
                    <Icon icon="material-symbols:close-rounded" />
                </button>
            )}
        </label>
    )
}

export default memo(Input)
