import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header'

function Register() {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/add')
    }
  }, [])
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  async function signUp() {
    let item = { name, password, email }
    console.log(item)

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    result = await result.json()
    console.log("result", result)
    localStorage.setItem("user-info", JSON.stringify(result))
    history.push('/add')
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" placeholder="Name" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-3" placeholder="Passowrd" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-3" placeholder="Email" />
        <button onClick={signUp} className="btn btn-primary">Sign Up</button>
      </div>
    </>
  )
}

export default Register