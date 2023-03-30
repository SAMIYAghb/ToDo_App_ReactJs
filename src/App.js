

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'
import ToDo from './components/ToDo'
import AddTaskForm from './components/AddTaskForm'
import UpdateForm from './components/UpdateForm'



function App() {

  //main state
  const [todo, setTodo] = useState([
    {id: 1, title: "Task 1", status: false},
    {id: 2, title: "Task 2", status: false},
    {id: 3, title: "Task 3", status: false},
  ])


  //temporary state
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')


  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(newTask)
  }

  //add task
  const addTask = ()=>{
    const idNum = todo.length + 1
    // const NewEntry = {
    //   id: idNum,
    //   title: newTask,
    //   status: false,
    // }
    // setTodo([...todo, NewEntry])

    setTodo([...todo,{
        id: idNum,
        title: newTask,
        status: false,
      }])

    setNewTask('')
  }
// console.log(todo)

  //delete task
  const deleteTask = (id)=>{
      // const todos = todo.filter((task)=>(task.id !== id))
      // setTodo(todos)
      setTodo(todo.filter((task)=>(task.id !== id)))
     
  }

  // markDone task
  const markDone = (id)=>{
    const todos = todo.map((task)=>{
      if(task.id === id){
        return({...task, status: !task.status})
      }
      return task
    })
    setTodo(todos)

  }

  //cancel task
  const cancelTask = ()=>{
    setUpdateData('')
  }


  //change task for update
  const changeTask = (e)=>{
    // const newEntry={
    //   id: updateData.id,
    //   title: e.target.value,  
    //   status: updateData.status ? true : false,
    // }
    // setUpdateData(newEntry)
    setUpdateData({
        id: updateData.id,
        title: e.target.value,  
        status: updateData.status ? true : false,
      })
  }

  //update task
  const updateTask = ()=>{
      const filtertodos = [...todo].filter((task)=>(task.id !== updateData.id))
      const updateTodos = [...filtertodos,updateData]
      setTodo(updateTodos)
      setUpdateData('')
  }




  return (
    <div className="App text-center">
      <div className="my-5">To Do List App(ReactJS)</div>
      <div className='container'>
          <div className="row">           
            <div className="col-lg-6 col-md-5 m-auto"> 

            {updateData && updateData ? (
            <UpdateForm 
            updateData={updateData} 
            changeTask={changeTask} 
            updateTask={updateTask} 
            cancelTask={cancelTask}/>
            ) : (
            <AddTaskForm 
            newTask={newTask} 
            handleSubmit={handleSubmit} 
            setNewTask={setNewTask}
            addTask={addTask}/>)}
            </div>
          </div>

        {todo && todo.length  ? ('') : ('there is no todo list available')}
      
       <ToDo todo={todo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask}/>
      </div>
  
    </div>
  )
}

export default App
