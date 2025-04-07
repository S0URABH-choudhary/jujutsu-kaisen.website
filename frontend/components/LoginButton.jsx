import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

function LoginButton(props) {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();


  return (
    <div className={`login-form-button-container ${props.hide? props.hide : ""}`} style={{position:`${props.position}`, top:`${props.top}`, right:`${props.right}` , zIndex:`${props.zIndex}`}}>
    {isAuthenticated? (
      <button style={{backgroundColor:`${props.backgroundColor}`}} onClick={()=>{ logout({ logoutParams: { returnTo: window.location.origin } })}}>Logout</button>) : (
      <button style={{backgroundColor:`${props.backgroundColor}`}} onClick={() => loginWithRedirect()}>Login</button>)}
  </div>
  )
}

export default LoginButton