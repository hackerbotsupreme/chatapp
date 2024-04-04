import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
    // if (!user) {
    //     return <Navigate to={redirect} replace />
    // }
    // syntaxerror - unexpected token "<"
    //Great! I'm glad the implementation using React.createElement 
    // instead of JSX syntax resolved the Unexpected token '<' error
    //  you were facing. Sometimes, when dealing with syntax errors, 
    // it's helpful to take a step back and try a different approach 
    // that avoids the problematic syntax altogether.

    // Using React.createElement is a more verbose and low-level way of 
    // creating React elements compared to the concise JSX syntax, but 
    // it can be a useful fallback when you encounter parsing issues 
    // or other problems with JSX.
    if (!user) {
        return React.createElement(Navigate, { to: redirect, replace: true });
    }

    return children ? children : React.createElement(Outlet, null);
}

export default ProtectRoute;