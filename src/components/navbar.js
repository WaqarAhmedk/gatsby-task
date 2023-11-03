import React from "react";
import { pages } from "../mocks";
import { StaticImage } from "gatsby-plugin-image";


const NavBar = () => {
    return <main>
        <div className="flex justify-between px-14 lg:px-28 h-[100px] items-center gap-5">
            <div className="block lg:hidden">
                <StaticImage src="../images/icons/menu.png" height={40} width={40} />
            </div>
            <div>
                <StaticImage src="../images/images/logo.png" />
            </div>
            <div className="flex gap-4 items-center  justify-between">


                <ul className="  hidden lg:flex space-x-4 text-white gap-5">
                    {pages.map((page, index) => (
                        <li key={index} className="relative group h-[70px] pt-5 text-center align-middle items-center ">
                            <div className=" text-[#555555] hover:text-blue-500 flex items-center" >
                                <h2 className={`${page.name == 'Home' ? 'text-[#EF5C31]' : ''}`}> {page.name}</h2>
                                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                            {
                                page.other && page.other.length > 0 && (
                                    <div className="hidden absolute left-[-10px] mt-9  bg-white text-[#555555] border w-[200px] group-hover:block z-10">
                                        {page.other.map((otherPage, otherIndex) => (
                                            <div className="text-[#555555] pl-4 text-start py-2 border-b hover:text-[#EF5C31] cursor-pointer">
                                                {otherPage.name}
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        </li>
                    ))}
                </ul>
                <div className="items-center gap-4 hidden sm:flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /> </svg>
                    </div>
                    <button className="bg-[#EF5C31] w-[130px] h-[40px] text-white">
                        Free Quote
                    </button>
                </div>

            </div>

        </div >
    </main >
}

export default NavBar





