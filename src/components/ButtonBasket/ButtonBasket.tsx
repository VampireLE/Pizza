import style from "./ButtonBasket.module.scss";
import shop from "./../../assets/shop.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CountContext } from "../../App";

function ButtonBasket() {
    const navigate = useNavigate();
    const {pizzas, setPizzas} = useContext(CountContext);

    const count = () => {
        let c = 0;
        pizzas.forEach((el) => {
            if (el.count === 0) {
                c += 1
            } else {
                c += el.count
            }
        })
        return c
    }

    return (
        <div className={style['basket-btn']} onClick={() => navigate('/basket')}>
            <div className={style['basket-btn__wrapper']}>
                <div className={style['basket-btn__inner']}>
                    {/* <div>{count} ₽</div> */}
                    <div className={style.separator}></div>
                    <div className={style['basket-btn__icon-counts']}>
                        <img src={shop} alt="" />
                        <div>{count()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonBasket;