import IFitModal from "../../Utility Components/Modal";
import { Button } from "antd";

import { useState } from "react";

function Products() {

  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log('Ok clicked');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    setIsModalVisible(false);
  };

  return (
    <div className='productpage'>
      <Button onClick={showModal}>Open</Button>
      <IFitModal
      title="IFit Modal"
      isOpen={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      
      ></IFitModal>
    </div>


  )

}
export default Products;