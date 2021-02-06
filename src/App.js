import Form from './components/Form'
import Header from './components/Header'
import Main from './components/Main'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  const [search, setSearch] = useState({
    name: ''
  })

  const [result, setResult] = useState([])

  useEffect(() => {
    if (search === '') {
      return
    }
    const getInfo = async () => {
      const URL = `https://www.dnd5eapi.co/api/monsters/?name=${search.name}`
      const result = await Axios.get(URL)
      setResult(result.data.results)
    }

    getInfo()
    
  }, [search])
  

const handleChange = (e) => {
    setSearch({
        ...search,
        [e.target.name]: e.target.value
    })
}

  return (
    <div className='container'>
      <Header/>
      <div>
        <Form handleChange={handleChange}/>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <Main data={result}/>
        </div>
      </div>
    </div>
  );
}

export default App;
