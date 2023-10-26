
import './App.css'
import Header from './components/Header'
import Adduser from './components/Adduser'
import Viewusers from './components/Viewusers'
import { useState } from 'react'
//import { render } from 'react-dom'

function App () {
  //const [count, setCount] = useState(0)
  const [addUser, setAddUser] = useState({
    nom: "",
    username: ""
  })
//console.log(addUser[0].name);


          return (
          
            <div>
              <Header />
              <div className='main'>
                <Adduser
                  addUser={addUser}
                  setAddUser={setAddUser}
                />     
                <Viewusers 
                  infoUser={addUser}
                />   
              </div>
                  
            </div>
            
        
        )
        
  
}

export default App
