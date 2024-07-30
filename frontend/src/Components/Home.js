import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        Hi this is the Notice board of Newton School of Technology.
        Please Log in / Sign in to share your Information on Notice board.
        <button onClick={()=> {
            navigate("/loginAdmin")
        }}>Log In as Admin</button>
        <button onClick={() => {
            navigate("/loginFaculty")
        }}>Log In as Faculty</button>
        <button onClick={() => {
            navigate("/loginStudent")
        }}>Log In as a Student</button>

        Dont have an account.
        <button onClick={() => {
            navigate("/Signup")
        }}>Sign up</button>
    </div>
  )
}

export default Home