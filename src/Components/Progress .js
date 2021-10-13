import React from 'react';
import { Progress } from 'antd';
import { Switch } from 'antd';
import { Skeleton,Button, notification } from 'antd';import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';import { Steps } from 'antd';import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import { Checkbox } from 'antd';





















const plainOptions = ['Apple', 'Pear', 'Orange'];
const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
const { Step } = Steps;
const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
const ProgressCompo = () => {
    return (
        <div className="mt">

            <div>
                <Progress type="circle" percent={30} />
                <Progress type="dashboard" percent={50} status="active" format={percent => `${percent} Days`} />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
            </div>

            <div className="mt flex">
                <Switch defaultChecked  
checkedChildren="harisojs" 
unCheckedChildren="kumar" 

                />
                  <Switch defaultChecked  
checkedChildren="harisojs" 
unCheckedChildren="kumar" 
loading
                />
            </div>






            <div className="mt flex">
            <Skeleton   avatar paragraph={{ rows: 4 }}   shape="circle"                          />
            </div>





            <Button  className="mt flex" type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,





  <div className="mt flex">
      <Avatar size={64} icon={<UserOutlined />} /> <Avatar shape="square" size={64} icon={<UserOutlined />} />
     
      <Avatar icon={<UserOutlined />} /> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </div>





    <Steps className="mtt" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,


  <div className="mt flex">

<Rate  defaultValue={3} character={({ index }) => customIcons[index + 1]}
style={{"font-size":"10rem"}}
 />
 </div>



<div className="mt flex">
 
<InputNumber min={1} max={10} defaultValue={3} style={{"font-size":"2rem", "height":"9rem"}} />
   </div>
   <Checkbox.Group options={plainOptions} defaultValue={['Apple']}  style={{"font-size":"5rem"}}/>




































        </div>
    )
}
export default ProgressCompo