import { useEffect, useState } from "react"
import style from "./Navigation.module.scss"

function Navigation() {
    const [item, setItem] = useState(1);
    const [size, setSize] = useState(1);

    return (
        <div className={style.options}>
            <div className={style.options__wrapper}>
                <div className={style.options__type}>
                    <div className={`${style.options__item} ${item === 1 ? style['options__item--active'] : ''}`} onClick={() => setItem(1)}>тонкое</div>
                    <div className={`${style.options__item} ${item === 2 ? style['options__item--active'] : ''}`} onClick={() => setItem(2)}>традиционное</div>
                </div>
                <div className={style.options__sizes}>
                    <div className={`${style.options__item} ${size === 1 ? style['options__item--active'] : ''}`} onClick={() => setSize(1)}>26 см.</div>
                    <div className={`${style.options__item} ${size === 2 ? style['options__item--active'] : ''}`} onClick={() => setSize(2)}>30 см.</div>
                    <div className={`${style.options__item} ${size === 3 ? style['options__item--active'] : ''}`} onClick={() => setSize(3)}>40 см.</div>
                </div>
            </div>
        </div>
    )
}

export default Navigation