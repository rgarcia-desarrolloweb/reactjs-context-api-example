import React, { createContext, useState, useContext } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export const withAuthContext = Component => {
    return props => {
        return (
            <AuthContextProvider>
                <Component {...props} />
            </AuthContextProvider>
        )
    }
}