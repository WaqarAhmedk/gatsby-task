import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../button";


const Sec1 = () => {
    return <main>
        <div className=" relative">
            <StaticImage src="../../images/images/pexels-mikael-blomkvist-8961336.jpg" className="h-full w-full  " />

            <div className="absolute top-0 lg:top-[150px] left-3 lg:left-28">
                <h3 className="text-white text-[30px] lg:text-[50px]" >Expert in</h3>
                <h1 className="font-bold text-white text-[30px] lg:text-[50px] w-[500px]">Expert Knowledge in <span className="text-[#EF5C31]">Technical </span> Solution</h1>
                <div className=" flex-col lg:flex-row gap-5">
                    <Button name='Our Services' filled={false} />
                    <Button name='Learn More' filled={true} />

                </div>
            </div>
        </div>
    </main>
};


export default Sec1