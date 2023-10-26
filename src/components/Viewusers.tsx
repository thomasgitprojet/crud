//import React from 'react'

import User from "./User"

const Viewusers = ({infoUser}:any) => {


  return (
    <div className='viewusers'>
        <h2>View Users</h2>
        <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>action</th>
                    </tr>
                </thead>
                <tbody>
                  
                  <User 
                    infoUser={infoUser}
                  />
                  
                
                </tbody>
                
                
        </table>   
    </div> 
  )
}

export default Viewusers