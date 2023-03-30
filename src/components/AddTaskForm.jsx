import React from 'react'

export default function AddTaskForm({newTask, handleSubmit,setNewTask, addTask}) {
  return (
    <>
                        {/* add form          */}

                        <form onSubmit={handleSubmit}>
                          <div className="input-group mb-3">
                            <input onChange={(e)=>(setNewTask(e.target.value))} 
                            value={newTask}
                            type="text" className="form-control" placeholder="Task Name" aria-describedby="basic-addon2"/>
                            <div className="input-group-append ">
                              
                              <button 
                              onClick={()=>(addTask())}
                            
                              type="submit" className="btn btn-success" >Add Task</button>              
                            </div>          
                          </div>
                    </form>


            </>
  )
}
