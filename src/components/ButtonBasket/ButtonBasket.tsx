import style from "./ButtonBasket.module.scss";
import shop from "./../../assets/shop.svg";
import { useNavigate } from "react-router-dom";

function ButtonBasket({count}) {
    const navigate = useNavigate();

    return (
        <div className={style['basket-btn']} onClick={() => navigate('/basket')}>
            <div className={style['basket-btn__wrapper']}>
                <div className={style['basket-btn__inner']}>
                    <div>{count} ₽</div>
                    <div className={style.separator}></div>
                    <div className={style['basket-btn__icon-counts']}>
                        <img src={shop} alt="" />
                        <div>0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonBasket;