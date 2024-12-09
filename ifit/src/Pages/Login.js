import { useState } from "react";
import IFitModal from "../Utility Components/Modal";
import LoginForm from "./LoginForm";
import { setUser } from '../Store/Actions/appActions';
import { useDispatch, useSelector } from 'react-redux';


function Login() {
  
const [isModalVisible, setIsModalVisible] = useState(true);
const dispatch = useDispatch();
const currentUser = useSelector((state => state.app.user));

 

      const handleLogin =() =>{
        alert('Login details')
        dispatch(setUser(currentUser)); 
        
        // setIsModalVisible(false);
      }
  return (
    <div className="loginpage">
     <IFitModal
       
       isOpen={isModalVisible}
    
       footer={null}
       Component ={LoginForm}
       maskClosable={false}
       
       ></IFitModal>
      </div>
  );
}

export default Login;
