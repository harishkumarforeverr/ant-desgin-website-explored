import React from 'react' 
import "./index.scss";
import DatePickerComponent from "./DatePicker/DatePicker";
import MyModel from './DatePicker/Model';
import Date from './DatePicker/date';
import Messgae from './Message';
import DrawerComponent from './Drawer';
import CarouselComponent from './Carousel';
import DropdownCompo from './Dropdown';
import PaginationCompo from './Pagination';
import ReactComp from './Result';
import Popup from './Popup';
import ProgressCompo from './Progress ';
const AntDesgin = () => {
    return (
        <div> 
         <DatePickerComponent />
         <MyModel />
         <Date />
         <Messgae/>
         <DrawerComponent/>
         <CarouselComponent />
         <DropdownCompo />
         <PaginationCompo />
         <ReactComp />
         <Popup />
         <ProgressCompo />
        </div>
    )
}

export default AntDesgin
