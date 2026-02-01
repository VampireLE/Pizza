import style from "./Button.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../../features/order/orderSlice"

function Button({
    id, 
    dough, 
    size,
    title,
    price,
    img
}) {
    const dispatch = useDispatch();

    return (
        <div className={style.button} onClick={() => 
            dispatch(addItem({id, dough, size,title, price, img}))
        }>
            + Добавить
        </div>
    )
}

export default Button

// prev =>
                