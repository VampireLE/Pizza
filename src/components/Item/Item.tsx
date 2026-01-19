import { useContext } from "react";
import Button from "../Button/Button"
import Navigation from "../Navigation/Navigation";
import style from "./Item.module.scss"
import {CountContext}  from "../../App";

function Item({item}) {
    const {title, price, img} = item;

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
                    <Navigation/>
                </div>
                <div className={style.item__buy}>
                    <h3 className={style.buy__price}>
                        от {price} ₽
                    </h3>
                    <Button price={price}/>
                </div>
            </div>
        </div>
    )
}

export default Item