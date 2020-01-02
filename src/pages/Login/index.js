import axios from 'axios'

const test = async () => {
  window.location.href = 'http://localhost:9090/api/v1/auth/google'
  // const res = await axios('http://localhost:9090/api/v1/auth/google')
  // const data = await res.json()
}

const Login = () => {
  return (
    <div>
      Login
      <button onClick={test}>Google</button>
    </div>
  )
}

export default Login
