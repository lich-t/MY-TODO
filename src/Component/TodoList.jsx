import CreateTask from '../modals/createTask'
import { useState, useEffect } from 'react'
import Card from './Card.jsx'

export default function TodoList() {
  const [modal, setModal] = useState(false)
  const [taskList, setTaskList] = useState([])
  const toggle = () => setModal(!modal)

  useEffect(() => {
    let arr = localStorage.getItem('taskList')
    if (arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const deleteTask = (index) => {
    let updateTaskList = taskList
    updateTaskList.splice(index, 1)
    localStorage.setItem('taskList', JSON.stringify(updateTaskList))
    setTaskList(updateTaskList)
    window.location.reload()
  }

  const saveTask = (taskObj) => {
    let updateTaskList = [...taskList]
    updateTaskList.push(taskObj)
    localStorage.setItem('taskList', JSON.stringify(updateTaskList))
    setTaskList(updateTaskList)
    setModal(false)
  }

  const updateListArray = (obj, index) => {
    let updateTaskList = [...taskList]
    updateTaskList[index] = obj
    localStorage.setItem('taskList', JSON.stringify(updateTaskList))
    setTaskList(updateTaskList)
    setModal(false)
  }

  return (
    <>
      <div className="header text-center ">
        <h3 className=" ">Todo List</h3>
        <button
          className="btn btn-primary mt-2 "
          onClick={() => {
            setModal(true)
          }}
        >
          create Task
        </button>
      </div>

      <div className=" task-container">
        <div className="row g-4">
          {taskList &&
            taskList.map((obj, index) => (
              <div className="col-4">
                <Card
                  taskObj={obj}
                  index={index}
                  key={index}
                  deleteTask={deleteTask}
                  updateListArray={updateListArray}

                />
              </div>
            ))}
        </div>
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  )
}
