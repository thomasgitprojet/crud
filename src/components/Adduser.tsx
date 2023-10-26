//import React from 'react'
import { useEffect, useState } from 'react'

const Adduser = ({addUser, setAddUser}:any) => {
    //const [addName, setAddName] = useState("")
    
//<input type="text" name="name" value={addName} onChange={e => setAddName(e.target.value)}/>


const handleSubmit = (event:any) => {
    event.preventDefault();  
    
}
    
useEffect(() => {
         
});

    
  return (
        <div className='adduser'>
            <h2>Add User</h2>
            <div>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    Nom
                </label>
                    <input type="text" name="name"  onChange={e => setAddUser({...addUser, nom:e.target.value})}/>
                <label>
                    Username
                    <input type="text" name="name" onChange={e => setAddUser({...addUser, username:e.target.value},)}/>
                </label>
                    
                <button type="submit">Add User</button>
            </form>
                <form>
                    
                </form>  
            </div>
                     
        </div>
  )
}
export default Adduser