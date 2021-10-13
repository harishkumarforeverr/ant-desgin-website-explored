import React from 'react';
import { Pagination } from 'antd';

const PaginationCompo = ()=>{
return (
<div className="flex mt">
<Pagination defaultCurrent={6} total={500} showQuickJumper
onChange={(one)=>{
    console.log(one)
}}
 />
</div>
)
}
export default PaginationCompo;