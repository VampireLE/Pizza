import Item from "../Item/Item";
import style from "./Content.module.scss";
import { useState } from "react";

function Content({data}) {
    
    const [currentPage, setCurrentPage] = useState(1);

    const start = (currentPage - 1) * 8;
    let end = currentPage * 8;
    const res = data.slice(start, end)
    const pages = Array.from({length: Math.ceil(data.length / 8)}, (_, i) => i + 1);
    
    return (
        <div className={style.content}>
            <div className={style.content__title}>
                <h1>Все пиццы</h1>
            </div>
            <div className={style.content__body}>
                {
                    res.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Item item={item} />
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div className={style.navigation}>
                <div className={style.back} onClick={() => setCurrentPage(prev => prev !== 1 ? prev - 1 : prev)}></div>
                <div className={style.navigation__list}>
                    {
                        pages.map((val, index) => (
                            <div className={currentPage === index +1 ? style['page--active']: style.page} onClick={() => setCurrentPage(index + 1)}>
                                {val}
                            </div>
                        ))
                    }
                </div>
                <div className={style.forward} onClick={() => setCurrentPage(prev => prev !== Math.ceil(data.length / 8) ? prev + 1 : prev)}></div>
            </div>
        </div>
    )
}

export default Content;