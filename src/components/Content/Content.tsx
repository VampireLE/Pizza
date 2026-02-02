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
    const [currentPage, setCurrentPage] = useState(1);

    const a = [];

    
    
    const start = (currentPage - 1) * 8;
    let end = currentPage * 8;
    const res = data.slice(start, end)
    const pages = Array.from({length: Math.ceil(data.length / 8)}, (_, i) => i + 1);
    
    // for (let i = Math.max(2, currentPage - 1); i < Math.min(Math.ceil(data.length / 8)) - 1, currentPage + 1; i++) {
    //     a.push(i);
    // }


    console.log(a)
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
                            <div className={style.page} onClick={() => setCurrentPage(index + 1)}>
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