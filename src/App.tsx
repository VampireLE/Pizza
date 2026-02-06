import { createContext, useContext, useEffect, useState } from 'react'
import style from './App.module.scss'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Categories from './components/Categories/Categories'
import { Provider, useDispatch, useSelector } from 'react-redux'
// import Search from './components/Search/Search'

import CheeseburgerPizza from "./assets/Чизбургер-пицца.png";
import Cheers from "./assets/Сырная.png";
import AsianStyleShrimp from "./assets/Креветки по-азиатски.png"; 
import CheeseChicken from "./assets/Сырный цыпленок.png"



export const CountContext = createContext({});

function App() {
    
    const data = [
        {
            id: 1,
            img: CheeseburgerPizza, 
            title: 'Чизбургер-пицца', 
            price: 395,
            count: 0,
            popularity: 8.1,
            categori: [1, 2]
        },
        {
            id: 2,
            img: Cheers, 
            title: 'Сырная', 
            price: 450,
            count: 0,
            popularity: 2.0,
            categori: [1]
        },
        {
            id: 3,
            img: AsianStyleShrimp, 
            title: 'Креветки по-азиатски', 
            price: 290,
            count: 0,
            popularity: 3.4,
            categori: [1, 4]
        },
        {
            id: 4,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 9.9,
            categori: [1, 3]
        },
        {
            id: 5,
            img: CheeseburgerPizza, 
            title: 'Чизбургер-пицца', 
            price: 395,
            count: 0,
            popularity: 5.0,
            categori: [2, 3]
        },
        {
            id: 6,
            img: Cheers, 
            title: 'Сырная', 
            price: 450,
            count: 0,
            popularity: 1.1,
            categori: [6, 3]
        },
        {
            id: 7,
            img: AsianStyleShrimp, 
            title: 'Креветки по-азиатски', 
            price: 290,
            count: 0,
            popularity: 8.0,
            categori: [2, 4]
        },
        {
            id: 8,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 8.1,
            categori: [4, 5]
        },
        {
            id: 9,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 2.1,
            categori: [3]
        },
        {
            id: 10,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 4.1,
            categori: [2]
        },
        {
            id: 11,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 3.1,
            categori: [2, 4]
        },
        {
            id: 12,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 8.5,
            categori: [1, 2]
        },
        {
            id: 13,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 2.2,
            categori: [1, 3]
        },
        {
            id: 14,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 3.3,
            categori: [1, 2]
        },
        {
            id: 15,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 0.5,
            categori: [1, 6, 5]
        },
        {
            id: 16,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 1.1,
            categori: [1, 4]
        },
        {
            id: 17,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0,
            popularity: 8.9,
            categori: [1]
        },
    ]

  const [pizzas, setPizzas] = useState([]);
  const [choseDropdownMenu, setChoseDropdownMenu] = useState(0);

  const [categori, setCategori] = useState(1);

  const filterByCategori = () => {
    return data.filter((val) => categori !== 1 ?  val.categori.includes(categori) : val)
  }

  const filterByPrice = () => {
    return filterByCategori().sort((a, b) => a.price - b.price)
  }

  const filterByPopularity = () => {
    return filterByCategori().sort((a, b) => a.popularity - b.popularity)
  }

  const filterByText = () => {
    return filterByCategori().sort((a, b) => a.title.localeCompare(b.title))
  }

  const contentData = () => {
    switch (choseDropdownMenu) {
        case 1:
            return filterByPopularity();
        case 2:
            return filterByPrice();
        case 3:
            return filterByText();
        default:
            return filterByCategori();
    }
  }

  return (
      <div className={style.layout}>
        <div className={style.layout__wrapper}>
          <CountContext.Provider value={{pizzas, setPizzas}}>
              <Header/>
              <Categories 
                setChoseDropdownMenu={setChoseDropdownMenu} 
                categori={categori}
                setCategori={setCategori}
                />
              <Content
                data={contentData()}
                />
          </CountContext.Provider>
        </div>
      </div>
  )
}

export default App