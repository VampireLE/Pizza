import { createContext, useContext, useState } from 'react'
import style from './App.module.scss'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Search from './components/Search/Search'
import { Provider, useDispatch, useSelector } from 'react-redux'
import TableTest from './components/TableTest/TableTest'
// import Search from './components/Search/Search'

export const CountContext = createContext({});

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className={style.layout}>
        <div className={style.layout__wrapper}>
          <CountContext.Provider value={{count, setCount}}>
              {/* <Header count={count}/> */}
              {/* <Search/> */}
              {/* <Content/> */}
              <TableTest/>
          </CountContext.Provider>
        </div>
      </div>
  )
}

export default App