import React from 'react'
import { Link } from 'react-router-dom'

const Favourite = ({current,song}) => {

  const renderTask = <h2>Add Songs</h2>
  
  if(song.length>0)
  {
    
  }



  return (
    <>
      <div className="main">
        <ul>
            {renderTask}
        </ul>
      </div>
    </>
  )
}

export default Favourite