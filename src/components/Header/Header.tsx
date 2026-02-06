import { useContext, useState } from "react";
import ButtonBasket from "../ButtonBasket/ButtonBasket";
import Search from "../Search/Search";
import style from "./Header.module.scss";
import { useSelector } from "react-redux";
import { CountContext } from "../../App";

function Header() {

    const data = [
        {
            id: 1,
            title: 'Чизбургер-пицца', 
            price: 395,
            count: 0
        },
        {
            id: 2,
            title: 'Сырная', 
            price: 450,
            count: 0
        },
        {
            id: 3,
            title: 'Креветки по-азиатски', 
            price: 290,
            count: 0
        },
        {
            id: 4,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 5,
            title: 'Чизбургер-пицца', 
            price: 395,
            count: 0
        },
        {
            id: 6,
            title: 'Сырная', 
            price: 450,
            count: 0
        },
        {
            id: 7,
            title: 'Креветки по-азиатски', 
            price: 290,
            count: 0
        },
        {
            id: 8,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 9,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 10,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 11,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 12,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 13,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 14,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 15,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 16,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 17,
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
    ]


    const [value, setValue] = useState('')
    // const {pizzas, setPizzas} = useContext(CountContext);
    const dataFilter = () => {
        return data.filter((el) => (el.title.toLowerCase().includes(value.toLowerCase())))
    }

    // console.log(dataFilter())
    return (
        <div className={style.header}>
            <div className={style.header__wrapper}>
                <div className={style.header__inner}>
                    <div>
                        <div className={style.header__icon}></div>
                        <div className={style.header__title}>
                            <h2>REACT PIZZA</h2>
                            <span>самая вкусная пицца во вселенной</span>
                        </div>
                    </div>

                    <div>
                        <Search setValue={setValue}/>
                    </div>

                    <div>
                        <ButtonBasket />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header