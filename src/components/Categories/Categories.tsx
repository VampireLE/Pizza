import { useEffect, useRef, useState } from "react";
import style from "./Catigories.module.scss"

function Categories({setChoseDropdownMenu}) {
    const [categori, setCategori] = useState(1);
    const [dropDown, setDropDown] = useState(false);
    const dropDownStyle = useRef(null);

    useEffect(() => {
        const outDropDown = (event) => {
            if (event.target !== dropDownStyle.current) {
                setDropDown(false)
            }
        }
        
        document.addEventListener('click', outDropDown)

        return (() => {
            document.removeEventListener('click', outDropDown)
        })
    }, [dropDown])

    return (
        <div className={style.search}>
            <div className={style.search__wrapper}>
                <div className={style.search__inner}>
                    <div className={style.search__categories}>
                        <div className={`${style.search__item} ${categori === 1 && style['search__item--active']}`} onClick={() => setCategori(1)}>Все</div>
                        <div className={`${style.search__item}  ${categori === 2 && style['search__item--active']}`} onClick={() => setCategori(2)}>Мясные</div>
                        <div className={`${style.search__item}  ${categori === 3 && style['search__item--active']}`} onClick={() => setCategori(3)}>Вегетарианская</div>
                        <div className={`${style.search__item}  ${categori === 4 && style['search__item--active']}`} onClick={() => setCategori(4)}>Гриль</div>
                        <div className={`${style.search__item}  ${categori === 5 && style['search__item--active']}`} onClick={() => setCategori(5)}>Острые</div>
                        <div className={`${style.search__item}  ${categori === 6 && style['search__item--active']}`} onClick={() => setCategori(6)}>Закрытые</div>
                    </div>
                    <div  className={style.search__sort} onClick={() => setDropDown(true)}>
                        <p>Сортировка по: <span ref={dropDownStyle}>популярности</span></p>
                        <div style={dropDown ? {display: 'block'} : {}} className={style.sort__dropdown}>
                            <div onClick={() => setChoseDropdownMenu(1)}>по пулярности</div>
                            <div onClick={() => setChoseDropdownMenu(2)}>по цене</div>
                            <div onClick={() => setChoseDropdownMenu(3)}>по алфавиту</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories