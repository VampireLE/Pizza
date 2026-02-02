import Item from "../Item/Item";
import style from "./Content.module.scss";
import CheeseburgerPizza from "./../../assets/Чизбургер-пицца.png";
import Cheers from "./../../assets/Сырная.png";
import AsianStyleShrimp from "./../../assets/Креветки по-азиатски.png"; 
import CheeseChicken from "./../../assets/Сырный цыпленок.png"
import { useContext, useState } from "react";
import { CountContext } from "../../App";

function Content() {

    const data = [
        {
            id: 1,
            img: CheeseburgerPizza, 
            title: 'Чизбургер-пицца', 
            price: 395,
            count: 0
        },
        {
            id: 2,
            img: Cheers, 
            title: 'Сырная', 
            price: 450,
            count: 0
        },
        {
            id: 3,
            img: AsianStyleShrimp, 
            title: 'Креветки по-азиатски', 
            price: 290,
            count: 0
        },
        {
            id: 4,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 5,
            img: CheeseburgerPizza, 
            title: 'Чизбургер-пицца', 
            price: 395,
            count: 0
        },
        {
            id: 6,
            img: Cheers, 
            title: 'Сырная', 
            price: 450,
            count: 0
        },
        {
            id: 7,
            img: AsianStyleShrimp, 
            title: 'Креветки по-азиатски', 
            price: 290,
            count: 0
        },
        {
            id: 8,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 9,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 10,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 11,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 12,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 13,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 14,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 15,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 16,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 17,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
    ]

    const {pizzas, setPizzas} = useContext(CountContext);

    const start = 1;
    let current = 1;
    let end = Math.ceil(data.length / 8);
    
    const pages = Array.from({length: end}, (_, i) => i + 1);
    
    return (
        <div className={style.content}>
            <div className={style.content__title}>
                <h1>Все пиццы</h1>
            </div>
            <div className={style.content__body}>
                {
                    data.map((item, index) => {
                        if (index < 8) {
                            return (
                                <div key={index}>
                                    <Item item={item} />
                                </div>
                            )
                        }
                    }
                    )
                }
            </div>
            <div className={style.navigation}>
                <div className={style.back}></div>
                <div className={style.navigation__list}>
                    {
                        pages.map((val) => (
                            <div className={style.page}>
                                {val}
                            </div>
                        ))
                    }
                </div>
                <div className={style.forward}></div>
            </div>
        </div>
    )
}

export default Content;