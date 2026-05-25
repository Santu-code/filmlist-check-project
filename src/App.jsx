import { useState } from 'react'
import NavbarContainer from './components/navbar/navbarContainer'
import { FetchApi} from './components/fetchApi/FetchApi'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CardDetail from './components/cardDetail/CardDetail'
import {MyListProvider} from './context/MyListContext'
import MyListContainer from './components/myList/MyListContainer'

import './App.css'

function App() {

  return (
    <MyListProvider>
    <BrowserRouter>
      <NavbarContainer/>
      <Routes>
        <Route path='/' element={<FetchApi />} />
        <Route path='card-detail' element={<CardDetail />} />
        <Route path='my-list' element={<MyListContainer/>} />
      </Routes>
    </BrowserRouter>
    </MyListProvider>
  )
}

export default App
