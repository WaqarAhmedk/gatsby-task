import React from "react"
import Header from "./header"
import NavBar from "./navbar"

const LayOut = ({ children }) => {
    return <main>
        <Header />
        <NavBar />
        {children}
    </main>
}


export default LayOut