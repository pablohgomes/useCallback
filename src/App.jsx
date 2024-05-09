
import './App.css';
import { useState, useCallback } from 'react';
//gerenciar o estado de algum valor

function App() {
  const [name, setName] = useState("UseCallback")
  const [number,setNumber] = useState("")
  const [password, setPassword]= useState("")
  const [email,setEmail] = useState("")

  const handleEntrar = useCallback(()=> {
    console.log(email)
    console.log(password)
  },[email,password]) 

const alteNumber = () =>{
  setNumber((prevNumber) => prevNumber+10)
 
}

const decNumber = () =>{
  setNumber((prevNumber) => prevNumber+100)
 
}

  return (
    <>
    <h1>Edivalter e Pablo: </h1>
    <div>
      <h2>Tema: {name}</h2>
    </div>

    
    <input type="text" value={name} onChange={ e=>setName(e.target.value)}/>
    <div>
      <div>
        <form>
          <p>Pagina de login :</p>
          <label>
            <span>Email:</span>
            <input value = {email} onChange={e=>setEmail (e.target.value)} />
          </label>

          <label>
            <span>Senha:</span>
            <input type="password" value = {password} onChange={e=>setPassword (e.target.value)} />
          </label>
          <button type='button' onClick={handleEntrar}>Entrar</button>
          <label>

          </label>


        </form>

      </div>
      <p>Nota:{number} </p>
      <button onClick={alteNumber}> Nota</button>
      ou
      <button onClick={decNumber}>Melhor nota</button>


    </div>
    
   
    
    </>
  )
}

export default App
