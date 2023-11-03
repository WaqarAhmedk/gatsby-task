import React, { useState, useEffect } from 'react';
import Sec1 from './hero/sec1';
import Sec2 from './hero/sec2';
import Sec3 from './hero/sec3';
import { StaticImage } from 'gatsby-plugin-image';

const ImageCarousel = () => {
    const sections = [<Sec1 />, <Sec2 />, <Sec3 />];
    const [currentSection, setCurrentSection] = useState(0);

    const prevSection = () => {
        setCurrentSection((currentSection + sections.length - 1) % sections.length);

    };

    const nextSection = () => {
        setCurrentSection((currentSection + 1) % sections.length);
    };



    // useEffect(() => {
    //     const interval = setInterval(nextSection, 5000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [currentSection]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="w-full h-full transition-transform ease-in-out transform" >
                {sections[currentSection]}
                {/* <Sec1 /> */}
            </div>
            <div className='absolute top-[50%] left-2 cursor-pointer h-full' onClick={prevSection}>
                <StaticImage src='../images/icons/left-arrow.png' height={20} width={20} className="" />
            </div>

            <div onClick={nextSection} className="absolute right-8 top-[50%] h-full  text-white cursor-pointer">
                <StaticImage src='../images/icons/right-arrow.png' height={20} width={20} className="" />
            </div>
        </div>
    );
};

export default ImageCarousel;
