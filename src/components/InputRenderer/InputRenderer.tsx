import { memo, ChangeEvent, useCallback, FC, useState } from 'react'

import { Input } from '~/components/Input'

import { getInputType, constructInitialState, getPlaceHolder } from './lib'

import type { InputRendererPropsType } from './types'

import styles from './input-renderer.module.scss'

const InputRenderer: FC<InputRendererPropsType> = ({
    inputRenderMap,
    onChange = () => {},
}) => {
    const [fieldValues, setFieldValues] = useState<Record<string, string>>(
        constructInitialState(inputRenderMap)
    )

    const handleChangeInput = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setFieldValues((prev) => {
                const newFieldValues = {
                    ...prev,
                    [e.target.id]: e.target.value,
                }

                onChange(newFieldValues)

                return newFieldValues
            })
        },
        [onChange]
    )

    const handleClearInput = useCallback((key: string) => {
        setFieldValues((prev) => {
            const newFieldValues ={
                ...prev,
                [key]: '',
            };

            onChange(newFieldValues)

            return newFieldValues
        })
    }, [onChange])

    const fields = inputRenderMap.map(({ id, type, defaultValue, label }) => (
        <Input
            key={id}
            id={id}
            label={label}
            type={getInputType(type)}
            onChange={handleChangeInput}
            value={fieldValues[id]}
            onClear={handleClearInput}
            defaultValue={defaultValue}
            placeholder={getPlaceHolder(type)}
        />
    ))

    return <div className={styles.wrapper}>{fields}</div>
}

export default memo(InputRenderer)
