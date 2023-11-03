import React from "react"
import { headerItems, icons } from "../mocks"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    return <main>
        <div className="hidden lg:flex h-[100px] w-full bg-[#1D2024] px-32  justify-between text-white "    >
            <div className="flex justify-between gap-3">
                {
                    headerItems.map((item) => {
                        return <div className="flex w-[250px] content-center align-middle justify-center items-center gap-3">
                            <div className="border border-gray-800 h-[70px] w-[60px] items-center flex justify-center" >
                                <StaticImage src={'../images/icons/location-svgrepo-com.svg'} className="text-white" width={30} height={30} />

                            </div>
                            <div>

                                <h2>{item.name}</h2>
                                <h2>{item.value}</h2>
                            </div>
                        </div>
                    })
                }


            </div>
            <div className="flex  items-center gap-3">
                <StaticImage src='../images/icons/facebook.png' width={40} height={40} />
                <StaticImage src='../images/icons/linkedin.png' width={40} height={40} />
                <StaticImage src='../images/icons/instagram.png' width={40} height={40} />
                <StaticImage src='../images/icons/twitter.png' width={40} height={40} />
            </div>
        </div>
    </main>
}



export default Header