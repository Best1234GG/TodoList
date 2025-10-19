import React, { useEffect, useState } from 'react'
import AddList from './components/AddList'
import ShowTask from './components/ShowTask'
import Stats from './components/Stats'
const App = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('myData')) || [])
  const [isEdit, setIsEdit] = useState(null)
  const [editText, setEditText] = useState('')

  const handleEditStart = (item) => {
    setIsEdit(item.id)
    setEditText(item.text)
  }
  const handleEditSave = () => {
    const newData = data.map((item) => {
      if (item.id === isEdit) {
        return { ...item, text: editText }
      }
      return item
    })
    setData(newData)
    setIsEdit(null)
  }

  const handleToggleDone = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done }
      }
      return item
    })
    setData(newData)
  }

  useEffect(() => {
    const Data_trans = JSON.stringify(data)
    localStorage.setItem('myData', Data_trans)
  }, [data])
  return (

    <div>
      <h1>Simple Todo List</h1>
      <hr />
      <p>Manage your tasks easily</p>
      <main>
        <AddList data={data} setData={setData} />
        <ShowTask
          data={data}
          setData={setData}
          isEdit={isEdit}
          editText={editText}
          setEditText={setEditText}
          handleEditStart={handleEditStart}
          handleEditSave={handleEditSave}
          handleToggleDone={handleToggleDone}

        />
        <Stats data={data} />
      </main>
    </div>
  )
}

export default App
