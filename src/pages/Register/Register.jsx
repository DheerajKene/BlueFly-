import React from 'react'
import './Register.css'
import Navbar from '../../Componants/Navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Componants/Footer/Footer';




const Register = () => {
  let Data = [];

  function saveData(key, arr){
    localStorage.setItem(key, JSON.stringify(arr));
  }

  function Loaddata(){
    let savedData = JSON.parse(localStorage.getItem("Data"));
    if(savedData){
      Data = savedData;
    }
  }

  const[formData, setFormData] = useState({});

  function Handlesubmit(e){
    e.preventDefault();
    let firstName = e.target[0].value;
    let lastName = e.target[1].value;
    let Email = e.target[2].value;
    let Password= e.target[3].value;
    let Confirm_Password= e.target[4].value;

    if((firstName.length == 0) && (Password.length == 0)){
      alert("Please enter correct crediantials");

    }else if(Password == Confirm_Password){
      let UserData = {
        FirstName: firstName,
        LasteName: lastName,
        email: Email,
        password:Password
      };

      Data.push(UserData);
      saveData("Data", Data);
      alert("Registration Successful");
      window.location.href = './Login'

    }
    else{
      alert("Please Check Crediantials");
    }

    console.log(UserData);
  }



  return (
      <div>
        <Navbar/>
        <div id='MainRigisterDiv'>
        <header>CREATE ACCOUNT</header>
        <form className='RegisterForm' onSubmit={Handlesubmit} value='submit' action="">
          <label htmlFor="FirstName">FIRST NAME</label>
            <br />
            <input type="text" name="FirstName" />
            <br />
            <br />
            <label htmlFor="LastName">LAST NAME</label><br />
            <input type="text" name="LastName" />
            <br />
            <br />
            <label htmlFor="email">EMAIL</label><br />
            <input type="text" name="Email" />
            <br />
            <br />
            <label htmlFor="password">PASSWORD</label><br />
            <input type="password" name="password" />
            <br />
            <br />
            <label htmlFor="password">CONFIRM PASSWORD</label><br />
            <input type="password" name="confirm_password" />
            <br />
            
            <button className='Register' type="submit">CREATE</button>
            <br />
            <br />
         </form>
         <script></script>

        </div>
        <Footer/>
        {Loaddata()}
      </div>
   

  );
  
}


export default Register
