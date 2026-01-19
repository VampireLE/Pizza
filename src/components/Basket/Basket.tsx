import Header from "../Header/Header"
import style from "./Basket.module.scss"
import Content from "./Content"

function Basket() {
    return (
        <div className={style.layout}>
            <div className={style.layout__wrapper}>
                {/* <Header/> */}
                <Content/>
            </div>   
        </div>
    )
}

export default Basket