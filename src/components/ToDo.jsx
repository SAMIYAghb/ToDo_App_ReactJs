import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan, faCircleCheck} from '@fortawesome/free-solid-svg-icons'

 const toDo= ({todo,markDone,setUpdateData,deleteTask}) =>{
  return (
    <>
    {todo && todo
      .sort((a, b) => a.id > b.id ? 1: -1)
      .map((task, index)=>(
        <div key={task.id}className='row'>
          <div className="col-lg-6 col-md-5 my-3 m-auto py-2 task-bg ">
            <div className={task.status ? 'done': ''}>
                <span className='taskText'> {index+1} :</span>
                <span className='taskText'> {task.title}</span>
            </div>
            <div className='icons'>
              {task.status ? null :
              <span title="Completed/Not completed"><FontAwesomeIcon icon={faCircleCheck} 
              onClick={(e)=>(markDone(task.id))} /></span>
               }
              

              <span title="Edite" className='px-3'><FontAwesomeIcon icon={faPen} 
              onClick={()=>(setUpdateData(
                {
                id:task.id,
               title:task.title,
               status: task.status ? true : false
              }
               ))} /></span>

              <span title="Delete"><FontAwesomeIcon icon={faTrashCan}
              onClick={()=>(deleteTask(task.id))} /></span>
            </div>
          </div>
        </div>
      ))}
</>
  )
}
export default toDo