import { createContext, useContext, useState } from 'react'
import style from './App.module.scss'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Search from './components/Search/Search'
import { Provider, useDispatch, useSelector } from 'react-redux'
import TableTest from './components/TableTest/TableTest'
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
            count: 0
        },
        {
            id: 2,
            img: Cheers, 
            title: 'Сырная', 
            price: 450,
            count: 0
        },
        {
            id: 3,
            img: AsianStyleShrimp, 
            title: 'Креветки по-азиатски', 
            price: 290,
            count: 0
        },
        {
            id: 4,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 5,
            img: CheeseburgerPizza, 
            title: 'Чизбургер-пицца', 
            price: 395,
            count: 0
        },
        {
            id: 6,
            img: Cheers, 
            title: 'Сырная', 
            price: 450,
            count: 0
        },
        {
            id: 7,
            img: AsianStyleShrimp, 
            title: 'Креветки по-азиатски', 
            price: 290,
            count: 0
        },
        {
            id: 8,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 9,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 10,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 11,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 12,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
        {
            id: 13,
            img: CheeseChicken, 
            title: 'Сырный цыпленок', 
            price: 385,
            count: 0
        },
    ]
  const [pizzas, setPizzas] = useState([]);

  return (
      <div className={style.layout}>
        <div className={style.layout__wrapper}>
          <CountContext.Provider value={{pizzas, setPizzas}}>
              <Header/>
              <Search/>
              <Content/>
              {/* <TableTest/> */}
          </CountContext.Provider>
        </div>
      </div>
  )
}

export default App