import logo from "../styles/img/logo.png";
import '../styles/login.css';
import '../styles/main.css';

const Login = () => {
    return (
      <div className="login-div">
        <div className="login-logo-section">
          <img  className="login-logo" src={logo} alt="The Local Hospital" />            
        </div>
        <div className="login-form-section">
          <h1>Log In</h1>
          <form action=""></form>
        </div>
      </div>

    );
  };
  
  export default Login;
  