import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../button";


const Sec3 = () => {
    return <main>
        <div className=" relative">
            <StaticImage src="../../images/images/pexels-pixabay-259984.jpg" className="h-full w-full  " />

            <div className="absolute top-[150px] left-28">
                <h3 className="text-white text-[50px]" >Expert in</h3>
                <h1 className="font-bold text-white text-[50px] w-[700px]">Empowering Oil Refiling and <span className="text-[#EF5C31]">Processing </span>plants </h1>
                <div className="flex gap-5">
                    <Button name='Our Services' filled={false} />
                    <Button name='Learn More' filled={true} />

                </div>
            </div>
        </div>
    </main>
};


export default Sec3