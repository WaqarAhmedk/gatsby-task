import React from "react";



const Button = ({ name, filled, anyclass }) => {
    return <button className={`h-[50px] w-[200px] px-4 text-white ${filled ? 'bg-[#EF5C31]' : 'border-2 border-white'}`}>
        {name}
    </button>
}


export default Button