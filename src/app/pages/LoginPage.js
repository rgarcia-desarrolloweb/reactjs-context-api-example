import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from './../context/auth'

const LoginPage = () => {
    const [redirect, setRedirect] = useState(false)
    const { setIsAuthenticated } = useAuth()

    const handleSubmit = e => {
        e.preventDefault()
        setIsAuthenticated(true)
        setRedirect(true)
    }

    return !redirect ? (
        <div className="card align-self-center w-25 mb-5">
            <div className="card-header">
                Login
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
    ) : <Redirect to={{ pathname: "/" }} />
}

export default LoginPage