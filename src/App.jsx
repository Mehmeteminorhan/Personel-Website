

import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route,Switch } from 'react-router-dom'
import HireMe from './Roots/MainPage'


function App() {
  const dispatch = useDispatch();
  const lang = useSelector(myStore => myStore.lang);



  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === 'false'){
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  },[lang,dispatch])



  return (
    <Switch>
      <Route exact path = '/'>
        <HireMe/>
      </Route>
    </Switch>
  )
}

export default App
