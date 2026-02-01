import { useContext, useEffect, useState } from "react"
import style from "./Navigation.module.scss"

function Navigation({
    dough, 
    setDough, 
    size, 
    setSize
}) {
    
    return (
        <div className={style.options}>
            <div className={style.options__wrapper}>
                <div className={style.options__type}>
                    <div className={`${style.options__item} ${dough === 'тонкое' ? style['options__item--active'] : ''}`} onClick={() => setDough('тонкое')}>тонкое</div>
                    <div className={`${style.options__item} ${dough === 'традиционное' ? style['options__item--active'] : ''}`} onClick={() => setDough('традиционное')}>традиционное</div>
                </div>
                <div className={style.options__sizes}>
                    <div className={`${style.options__item} ${size === '26 см' ? style['options__item--active'] : ''}`} onClick={() => setSize('26 см')}>26 см.</div>
                    <div className={`${style.options__item} ${size === '30 см' ? style['options__item--active'] : ''}`} onClick={() => setSize('30 см')}>30 см.</div>
                    <div className={`${style.options__item} ${size === '40 см' ? style['options__item--active'] : ''}`} onClick={() => setSize('40 см')}>40 см.</div>
                </div>
            </div>
        </div>
    )
}

export default Navigation