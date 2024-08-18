import { NavLink } from "react-router-dom";
import React from 'react'
const Card = ({ img, heading, content ,index}) => {
  console.log("child");
  return (
    <div>
      <div className="  w-[230px] h-[280px]  md:mx-10 mx:auto  hover:scale-110 duration-300 ease-in-out">
        <NavLink to={`/cartdata/${index}`}>
          <div className="w-[230px] mx-auto">
          <img src={img} alt="images" className="object-cover object-center " />
          </div>
          <h1 className="text-xl text-center text-white ">{heading}</h1>
          <p className="text-[#e7e5e5]  ease-in">{content}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(Card);
