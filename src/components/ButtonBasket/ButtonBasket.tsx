import style from "./ButtonBasket.module.scss";
import shop from "./../../assets/shop.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ButtonBasket() {
    const navigate = useNavigate();

    const baskets = useSelector(state => state.order.value)
    

    return (
        <div className={style['basket-btn']} onClick={() => navigate('/basket')}>
            <div className={style['basket-btn__wrapper']}>
                <div className={style['basket-btn__inner']}>
                    <div className={style['basket-btn__price']}>{baskets.reduce((sum, val) => sum += val.price * val.count, 0)} ₽</div>
                    <div className={style.separator}></div>
                    <div className={style['basket-btn__icon']}>
                        <img src={shop} alt="" />
                    </div>
                    <div className={style['basket-btn__counter']}>{baskets.reduce((sum, val) => sum += val.count, 0)}</div>
                </div>
            </div>
        </div>
    )
}

export default ButtonBasket;