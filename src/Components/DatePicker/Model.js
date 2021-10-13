import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const MyModel = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  return (
    <div className="flexdisplay mt">
    <div>
    <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
    <div>
    <Button type="primary" onClick={showModal1}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1} 
      afterClose={(e)=>{ 
          console.log(e)
      }}
      keyboard
      width={1000}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>  
    </div>
  );
};
 
export default MyModel;