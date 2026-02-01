import ButtonBasket from "../ButtonBasket/ButtonBasket";
import style from "./Header.module.scss";

function Header() {
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
                        <ButtonBasket />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header