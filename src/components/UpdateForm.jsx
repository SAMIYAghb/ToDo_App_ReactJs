import React from 'react'

export default function UpdateForm({updateData,changeTask, updateTask, cancelTask}) {
  return (
    <>

               {/* update form          */}
            <div className="input-group mb-3">
            <input 
            value={updateData && updateData.title}
            onChange={(e)=>(changeTask(e))}
            type="text" className="form-control"/>

            <button 
            onClick={()=>(updateTask())}
            className="btn btn-info me-2">Update</button>

            <button
            onClick={()=>(cancelTask())}
             className="btn btn-warning ">Cancel</button>

          </div>
          </>
  )
}
