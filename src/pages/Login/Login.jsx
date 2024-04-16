import React from 'react'
import './Login.css'
import {Navigate} from 'react-router-dom'
import Navbar from '../../Componants/Navbar/Navbar'
import Footer from '../../Componants/Footer/Footer'

const Login = () => {

  var data;
  function Loaddata(){
    let savedData = JSON.parse(localStorage.getItem("Data"));
    if(savedData){
      data = savedData;
    }

  }


  function HandleLogin(e){
  e.preventDefault();
  let email = e.target[0].value;
  let pass = e.target[1].value;

  let narr = data.filter(function(ele, i){
    return ((ele.email === email) && (ele.password === pass));
  })

  if(narr.length > 0){
    alert("Login Successful...")
    window.location.href = './Home'
  }
  else{
    alert("Check Crediantials..!!")
  }
    
}

  return (
    <>
      <Navbar/>
      <div id='MainLoginDiv'>
        <header>LOGIN</header>
        <form className='LoginForm' onSubmit={HandleLogin} action="">
            <label htmlFor="">EMAIL</label>
            <br />
            <input type="text" />
            <br />
            <br />
            <label htmlFor="">PASSWORD</label><br />
            <input type="password" />
            <br />
            <button className='SignIn' type="submit">SIGN IN</button>
            <br />
            <br />
            <a href="./Register">Create account</a>
        </form>
      </div>
      <Footer/>
      {Loaddata()}
    </>
  )
}

export default Login