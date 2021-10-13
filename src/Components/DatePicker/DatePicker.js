import React from 'react';
import "./DatePicker.scss";
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

import { MessageOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons'; 
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });


const DatePickerComponent = () => {
    return (
        <div>

            <div className="flexdisplay">
                <div>
                    <Button type="primary">Primary Button</Button>
                </div>
                <div className="mybutton">
                    <Button type="primary"
                        icon={<SearchOutlined />} block danger
                        onClick={() => {
                            alert("harish");
                        }}
                    >Primary Button</Button>

                </div>
            </div>
            <div className="flexdisplay mt">
                <div>
                <IconFont type="icon-facebook" />
                </div>        
                <div>
                <IconFont style={{color:"red", fontSize:"10rem"}} type="icon-facebook"  rotate={30} /> 
                </div>
            </div>
        </div>
    )
}
export default DatePickerComponent;

//general
// icon and button completed

//feedback
//model