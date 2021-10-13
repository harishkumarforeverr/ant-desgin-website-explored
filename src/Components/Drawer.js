import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

const DrawerComponent = () => {
    const [visible, setVisible] = useState(false); 
    const [visible2, setVisible2] = useState(false); 

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const showDrawer2 = () => {
        setVisible2(true);
    };

    const onClose2 = () => {
        setVisible2(false);
    };
    return (
        <>
           <div>
           <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
           </div>
           <div>
           <Button type="dashed" onClick={showDrawer2}>
                Open
            </Button>
            <Drawer
             title="Basic Drawer"
              placement="top" 
              onClose={onClose2} 
              visible={visible2}
              bodyStyle={{color:"red",background:"blue"}}
            //   closable={false} 
              keyboard={false}
              size="large" 
              width="300"
            //   onClose={()=>{
            //       console.log("ok garsihs");
            //   }}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
           </div>
        </>
    );
};
export default DrawerComponent;