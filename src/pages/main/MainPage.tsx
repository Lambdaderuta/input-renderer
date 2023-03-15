import { FC, memo, useCallback, useState } from 'react'

import styles from './main.module.scss'

import { InputRenderer } from '~/components/InputRenderer'

import type { MainPagePropsType } from './types'

const MainPage: FC<MainPagePropsType> = ({ data }) => {
    // Не хотел хранить тк лишние рендеры,
    // но раз уж по заданию нужны актуальные данные, то решил засинкать
    const [formFields, setFormFields] = useState({})
    const [disabled, setDisabled] = useState(true)

    const onChange = useCallback((fieldValues: Record<string, string>) => {
        const values = Object.values(fieldValues)
        setFormFields(values)
        setDisabled(values.length <= 0 || values.some((val) => !val))
    }, [])

    return (
        <div className={styles.layout}>
            <div className={styles.box}>
                <div className={styles.title}>Авторизация</div>
                <div className={styles.description}>
                    Для доступа к личному кабинету вашей <br />
                    компании авторизуйтесь на сайте
                </div>

                <form className={styles.form} action="">
                    <InputRenderer inputRenderMap={data} onChange={onChange} />
                    <button
                        className={styles.submit}
                        role="button"
                        disabled={disabled}
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}

export default memo(MainPage)
