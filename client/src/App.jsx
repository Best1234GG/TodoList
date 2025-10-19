import React, { useState } from 'react'
import AddList from './components/AddList'
import ShowTask from './components/ShowTask'
const App = () => {
  const [data, setData] = useState([])
  return (

    <div>
      <h1>Simple Todo List</h1>
      <p>Manage your tasks easily</p>
      <AddList />
      <ShowTask />
    </div>
  )
}

export default App
