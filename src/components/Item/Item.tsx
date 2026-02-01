import { useContext, useState } from "react";
import Button from "../Button/Button"
import Navigation from "../Navigation/Navigation";
import style from "./Item.module.scss"
import {CountContext}  from "../../App";
import { useSelector } from "react-redux";
import { addItem } from "../../features/order/orderSlice";

function Item({item}) {
    const {id, title, price, img, count} = item;
    const [dough, setDough] = useState('тонкое');
    const [size, setSize] = useState('26 см');
    
    const pizzas = useSelector(state => state.order.value)
    console.log(pizzas)

    return (
        <div className={style.item}>
            <div className={style.item__wrapper}>
                <div className={style.item__img}>
                    <img src={img} alt="#" />
                </div>
                <div className={style.item__title}>
                    {title}
                </div>
                <div className={style.item__nav}>
                    <Navigation dough={dough} setDough={setDough} size={size} setSize={setSize}/>
                </div>
                <div className={style.item__buy}>
                    <h3 className={style.buy__price}>
                        от {price} ₽
                    </h3>
                    <Button 
                        id={id}
                        dough={dough}
                        size={size}
                        title={title}
                        price={price}
                        img={img}/>
                </div>
            </div>
        </div>
    )
}

export default Item