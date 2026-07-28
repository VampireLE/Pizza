import { useNavigate } from "react-router-dom";
import style from "./Content.module.scss";
import shopingHero from "./../../assets/shopping-hero 1.svg";
import { useDispatch, useSelector } from "react-redux";
import iconBasket from "./../../assets/shop.svg"
import pizzaIcon from "./../../assets/pizza-icon.svg"
import trash from "./../../assets/trash.svg";
import add from "./../../assets/add.svg"
import decrease from "./../../assets/remove.svg"
import remove from "./../../assets/delete.svg"
import { addCount, clear, decreaseItem, removeItem } from "../../features/order/orderSlice";

function Content() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const baskets = useSelector(state => state.order.value)

    return (
        <>
            <div>
                <div className={style.content}>
                    <div className={style.content__wrapper}>
                        {baskets.length === 0 ? (
                            <div>
                                <div>
                                    <h1>Корзина пустая</h1>
                                    <span>Вероятней всего, вы не заказывали ещё пиццу.</span>
                                    <span>Для того, чтобы заказать пиццу, перейди на главную страницу.</span>
                                </div>
                                <div>
                                    <img src={shopingHero} alt="" />
                                </div>
                                <div className={style.btn__wrapper}>
                                    <div className={style.content__btn} onClick={() => navigate('/')}>Вернуться назад</div>
                                </div>
                            </div>
                        ) : (
                            <div className={style.container}>
                                <header className={style.header}>
                                    <div className={style.header__icon}>
                                        <img src={pizzaIcon} alt="" />
                                    </div>
                                    <div className={style.header__title}>
                                        <div className={style.header__name}>
                                            <p>PIZZA</p>
                                            </div>
                                        <div className={style.header__subtitle}>
                                            <span>Пицца</span>
                                        </div>
                                    </div>
                                </header>

                                <section className={style.section}>
                                    <div className={style.section__wrapper}>
                                        <div className={style.section__header}>
                                            <div className={style.header__icon}>
                                                <img src={iconBasket} alt="" />
                                            </div>
                                            <div className={style.header__title}>
                                                <h2>Корзина</h2>
                                            </div>
                                        </div>
                                        <div className={style.section__header} onClick={() => dispatch(clear())}>
                                            <div className={style.header__icon}>
                                                <img src={trash} alt="trash" />
                                            </div>
                                            <div style={{cursor: 'pointer'}} className={style.header__title}>
                                                <span>Очистить корзину</span>
                                            </div>
                                        </div>
                                    </div>



                                    <div className={style.section__list}>
                                        {baskets.map((item) => (
                                            <div key={item.id} className={style.card}>
                                                <div className={style.card__icon}>
                                                    <img src={item.img} alt="pizza" />
                                                </div>
                                                <div className={style.card__description}>
                                                    <div className={style.card__title}>{item.title}</div>
                                                    <div className={style.card__details}>{item.dough}, {item.size}</div>
                                                </div>
                                                <div className={style.card__toggle}>
                                                    <div className={style.card__decrease} onClick={() => dispatch(decreaseItem(item))}><img src={decrease}/></div>
                                                    <div className={style.card__counter}>{item.count}</div>
                                                    <div className={style.card__add} onClick={() => dispatch(addCount(item))}><img src={add}/></div>
                                                </div>
                                                <div className={style.card__price}>{item.price} Р</div>
                                                <div style={{cursor: 'pointer'}} className={style.card__remove} onClick={() => dispatch(removeItem(item))}><img src={remove}/></div>
                                            </div>
                                        ))}
                                    </div>



                                    <div className={style['section__summary']}>
                                        <div className={style.info}>
                                            <div>
                                                <p className={style['summary-p']}>Всего пицц: <span className={style['summary-span']}>{baskets.reduce((sum, val) => sum += val.count, 0)} шт.</span></p>
                                            </div>
                                            <div>
                                                <p className={style['summary__order-p']}>Сумма заказа: <span className={style['summary__order-span']}>{baskets.reduce((sum, val) => sum += val.price * val.count, 0)} ₽</span></p>
                                            </div>
                                        </div>
                                        <div className={style.choose}>
                                            <div className={style.choose__back} onClick={() => navigate('/')}>
                                                <div></div>
                                                <p>Вернуться назад</p>
                                            </div>
                                            <div className={style['choose__buy-now']}>
                                                <p>Оплатить сейчас</p>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;