import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"

/*
* Header
* - Logo
* - Nav Items
* Body
* - Search Bar
* - Restaurant Container
* - Restaurant Card
    - Name Of Restaurant
    - Star Rating
    - Cuisine
    - Delivery Time
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
