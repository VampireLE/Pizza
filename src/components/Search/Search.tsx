import style from "./Search.module.scss"

function Search({setValue}) {
    return (
        <>
            <input placeholder="Поиск пиццы..." onChange={(el) => setValue(el.target.value)}/>
        </>
    )
}

export default Search;