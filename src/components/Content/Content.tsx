import Item from "../Item/Item";
import style from "./Content.module.scss";
import CheeseburgerPizza from "./../../assets/Чизбургер-пицца.png";
import Cheers from "./../../assets/Сырная.png";
import AsianStyleShrimp from "./../../assets/Креветки по-азиатски.png"; 
import CheeseChicken from "./../../assets/Сырный цыпленок.png"
import { useState } from "react";

function Content() {
    const data = [
        {img: CheeseburgerPizza, title: 'Чизбургер-пицца', price: 395},
        {img: Cheers, title: 'Сырная', price: 450},
        {img: AsianStyleShrimp, title: 'Креветки по-азиатски', price: 290},
        {img: CheeseChicken, title: 'Сырный цыпленок', price: 385},
        {img: CheeseburgerPizza, title: 'Чизбургер-пицца', price: 395},
        {img: Cheers, title: 'Сырная', price: 450},
        {img: AsianStyleShrimp, title: 'Креветки по-азиатски', price: 290},
        {img: CheeseChicken, title: 'Сырный цыпленок', price: 385}
    ]
    
    return (
        <div className={style.content}>
            <div className={style.content__title}>
                <h1>Все пиццы</h1>
            </div>
            <div className={style.content__body}>
                {
                    data.map((item, index) =>
                        <div key={index}>
                            <Item item={item} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Content;