import { useNavigate } from "react-router-dom";
import style from "./Content.module.scss";
import shopingHero from "./../../assets/shopping-hero 1.svg";

function Content() {
    const navigate = useNavigate();
    
    return (
        <>
            <div>
                <div className={style.content}>
                    <div className={style.content__wrapper}>
                        <></>
                        <div>
                            <h1>Корзина пустая</h1>
                            <span>Вероятней всего, вы не заказывали ещё пиццу.</span>
                            <span>Для того, чтобы заказать пиццу, перейди на главную страницу.</span>
                        </div>
                        <div>
                            <img src={shopingHero} alt="" />
                        </div>
                        <div>
                            <div className={style.content__btn} onClick={() => navigate('/')}>Вернуться назад</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;