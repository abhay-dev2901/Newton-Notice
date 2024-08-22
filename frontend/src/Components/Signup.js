import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword,setShowPassword] = useState('')
    const [ShowButton, setShowButton] = useState(false)
    const [ShowButton1,setShowButton1] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState('')
    const [showForm,setShowForm] = useState(false)
    const navigate = useNavigate()


  return (
     <div className="relative flex items-center justify-center h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-200"></div>

        <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-2xl backdrop-filter backdrop-blur-lg">
            <h3 className='text-4xl font-bold text-blue-600 mb-6'>Fill your Details</h3>
            <form className="flex flex-col items-center space-y-4 w-full max-w-md">
                <div className="w-full">
                    <label htmlFor="fullname" className="block text-gray-700 mb-2">Full name</label>
                    <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => {
                        setFullname(e.target.value)
                    }}
                    className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none"
                    required
                    />
            </div>
            <div className="w-full">
                <label htmlFor="email" className="block text-gray-700 mb-2">College Email ID</label>
                <input
                type="text"
                id="emailId"
                name="emailId"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none"
                required
                />
          </div>
          <div className="w-full">
                <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none"
                required
                />
          </div>
          <div className="w-full relative">
                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    if(e.target.value !== ""){
                        setShowButton1(true)
                    }else{
                        setShowButton1(false)
                    }
                    }}
                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none"
                required
                />
                {ShowButton1 ? (
                    <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center p-3 text-blue-500 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                ) : (
                    ""
                    
                )}
                
                
            <div className="w-full relative">
                <label htmlFor="adminId" className="block text-gray-700 mb-2">Confirm password</label>
                <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    if(e.target.value !== ""){
                        setShowButton(true)
                    }else{
                        setShowButton(false)
                    }

                }}
                name="confirmPassword"
                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none"
                required
                />
                {ShowButton ? (
                    <button
                    type="button"
                    className="absolute inset-y-0 right-0 top-8 p-3 text-blue-500 focus:outline-none"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                ) : (
                    ""
                )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200 mt-4 w-full"
            onClick={() => {
                navigate("/SignUp/UniqueId")
            }}
          >
            Next
          </button>

        </div>

        </form>
        </div>

      </div>
    
  )
}

export default Signup 