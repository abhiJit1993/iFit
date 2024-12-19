import { useState } from "react";
import IFitModal from "../Utility Components/BS-Modal";
import LoginForm from "./LoginForm";
import { setUser } from '../Store/Actions/appActions';
import authAPIService from "../Services/authServices";
import { useDispatch, useSelector } from 'react-redux';
import showNotification from "../Utility Components/iFitNotification";
import browserService from '../Services/browserService'


function Login() {
  
const [isModalVisible, setIsModalVisible] = useState(true);
const dispatch = useDispatch();
const [formData, setFormData] = useState({ email: "", password: "" });


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleLogin = (e) => {
  e.preventDefault();
  console.log("Login data submitted:", formData);
  authAPIService.validateLogin(formData).then((userData)=>{
  console.log(userData)
  dispatch(setUser(userData))
  setIsModalVisible(false)
  showNotification('success', 'topRight','Login Successful !!','Your Login is Successful.');
  browserService.setCookies('IFlexToken','userData.data')

}
  ,(loginError)=>{
    console.log(loginError)
    setIsModalVisible(false)
    showNotification('error', 'topRight','Login Failed !!','Invalid Credentials.');
  })

};

const handleSSO = (provider) => {
  console.log(`Logging in with ${provider}`);
  // Implement SSO logic for providers here
};
const LoginBody = (
  <div className="p-4" style={{ maxWidth: "400px", margin: "auto" }}>
    <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>Welcome</h2>
    <p className="text-center mb-4" style={{ color: "#666" }}>Please Login to continue</p>
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label" style={{ fontWeight: "500" }}>Email Address</label>
        <input
          type="email"
          className="form-control shadow-sm"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email or mobile number"
          required
          style={{ borderRadius: "8px" }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label" style={{ fontWeight: "500" }}>Password</label>
        <input
          type="password"
          className="form-control shadow-sm"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          style={{ borderRadius: "8px" }}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 shadow-sm" style={{ borderRadius: "8px", fontWeight: "500" }}>Login</button>
    </form>
    <hr className="my-4" />
    <div className="text-center">
      <p style={{ color: "#666", fontWeight: "500" }}>Or login with</p>
      <div className="d-flex justify-content-between mt-3">
        <button
          type="button"
          className="btn btn-danger shadow-sm"
          style={{ borderRadius: "8px", width: "48%" }}
          onClick={() => handleSSO("Google")}
        >
          Google
        </button>
        <button
          type="button"
          className="btn btn-primary shadow-sm"
          style={{ borderRadius: "8px", width: "48%" }}
          onClick={() => handleSSO("Facebook")}
        >
          Facebook
        </button>
      </div>
    </div>
  </div>
);

 

  return (
    <div className="loginpage">
     <IFitModal 
      show={isModalVisible}
      title = {"Login"}
      body =  {LoginBody}
       
       ></IFitModal>
      </div>
  );
}

export default Login;
