import React from 'react';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
}

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}


const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
        </Menu.Item>
    </Menu>
);

const DropdownCompo = () => {
    return (
        <div className="flex mt">
            <div>
                <Space wrap>
                    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                        Dropdown
                    </Dropdown.Button>
                </Space>
            </div>

            <div>
                <Space wrap>
                    <Dropdown.Button
                        onClick={handleButtonClick} overlay={menu}
                        placement={"topCenter"}
                        onVisibleChange={()=>{
                            console.log("okkkkkkkkk")
                        }}
                    >
                        Dropdown
                    </Dropdown.Button>
                </Space>
            </div>

            <div>
                <Space wrap>
                    <Dropdown.Button
                        onClick={handleButtonClick} overlay={menu}
                        disabled
                    >
                        Dropdown
                    </Dropdown.Button>
                </Space>
            </div>  

        </div>
    )
}
export default DropdownCompo;