

import './App.css'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    <div>
      <HireMe/>

    </div>
  )
}

export default App
