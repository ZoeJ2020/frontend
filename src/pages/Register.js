import logo from "../styles/img/logo.png";
import '../styles/login.css';
import '../styles/main.css';

import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(username, password)
  }

    return (
      <div className="login-div">
        <div className="login-logo-section">
          <img  className="login-logo" src={logo} alt="The Local Hospital" />            
        </div>
        <div className="login-form-section">
          <form className="signup" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <br />
            <br />
            <input
              type="username" 
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="username"
            /> <br />
            <input
              type="password" 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
            /> <br />
            <br />
            
            <button>SIGN UP</button>
          </form>
        </div>
      </div>

    );
  };
  
  export default Register;