import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Header from "./Header"


function Login() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/add')
    }
  }, [])
  async function login() {
    let item = { email, password }
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    result = await result.json()
    if (result.id) {
      localStorage.setItem("user-info", JSON.stringify(result))
      history.push('/add')
    } else {
      console.log(result)
    }
  }
  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input value={email} type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control mb-3" />
        <input value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control mb-3" />
        <button onClick={login} className="btn btn-primary">Login</button>
      </div>
    </div>
  )
}

export default Login