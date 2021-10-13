import React from 'react';
import { Popconfirm, message } from 'antd';



function confirm(e) {
    console.log(e);
    message.success('Click on Yesssssssssssssssssssssss');
}

function cancel(e) {
    console.log(e);
    message.error('Click on Noooooooooooooooooo');
}
const Popup = () => {
    return (
        <div className="flex mt">
            <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yesssssssssssssssssssssss"
                cancelText="Nooooooooooooooooooooooooooo"
            >
                <a href="#">Delete</a>
            </Popconfirm>
        </div>
    )
}
export default Popup;