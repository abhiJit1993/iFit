import { useState } from "react";
import IFitModal from "../Utility Components/Modal";
import LoginForm from "./LoginForm";


function Login() {
  
const [isModalVisible, setIsModalVisible] = useState(true);
    const handleOk = () => {
        console.log('Ok clicked');
        setIsModalVisible(false);
      };
      
      const handleCancel = () => {
        console.log('Cancel clicked');
        setIsModalVisible(false)
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
