import React from 'react'; 
import { DatePicker  } from "antd";

function onChange(date, dateString) {
    console.log(date, dateString);
}
const callme=(e)=>{
    console.log(e.format("YYYY-MM-DD"));
}
const Date = ()=>{
return (
<div className="mt flexdisplay">
<DatePicker onChange={onChange} />
<DatePicker onChange={onChange} 
allowClear={true}  
picker={"month"}
placeholder={"harish"}
popupStyle={{color:"red",background:"blue"}}
size={'small'} 
onChange={callme}
/> 
<DatePicker onChange={onChange}   
disabled={true}
/>
</div>
)
}
export default Date;