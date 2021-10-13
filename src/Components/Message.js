import { message, Button } from 'antd';
import React from 'react';

const info = () => {
    message.info('This is a normal message'); 
};
const info1 = () => {
    message.success("harish", 1, ()=>{
        console.log("im closed")
    });
};

const Messgae = () => {
    return (
        <div className="flex mt">

        <Button type="primary"
        
         onClick={info}>
            Display normal message
        </Button>
        

        <Button type="primary" 
        content={"ok"} 
        onClick={info1} 
        top={90}
        style={{background:"red",color:"blue"}}
        >
                Display normal message
            </Button>
        </div>
    )
}
export default Messgae;