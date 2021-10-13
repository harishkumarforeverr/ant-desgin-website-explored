import React from 'react';

import { Carousel } from "antd";

function onChange(a, b, c) {
    console.log(a, b, c);
  }



  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
  };


const string="top";
const CarouselComponent = ()=>{
return (
<div className="mt">
<Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>1gggg</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
  <Carousel 
  autoplay={true}
//   afterChange={onChange}
  dotPosition='right'
  > 
    <div>
      <h3 style={contentStyle}>mydesgin</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
</div>
)
}
export default CarouselComponent;