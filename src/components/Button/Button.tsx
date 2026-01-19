import { useContext } from "react"
import style from "./Button.module.scss"
import { CountContext } from "../../App"

function Button({price}) {
    const {count, setCount} = useContext(CountContext)
    
    return (
        <div className={style.button} onClick={() => setCount(price + count)}>
            + Добавить
        </div>
    )
}

export default Button