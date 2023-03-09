import React from "react";

import ReactDOM from "react-dom/client";

import classes from "./app.module.css";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";

const HeaderComponent = () => {
        return (
                <div className={classes.header}>
                        <Title />
                        <div className={classes.nav_items}>
                                <ul>
                                        <li>About</li>
                                        <li>Home</li>
                                        <li>Contact</li>
                                        <li>Cart</li>
                                </ul>
                        </div>
                </div>
        )
}




export const RestrauntCard = ({restaurant}) => {
        return (
                <div className={classes.card}>
                        <img src ={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.cloudinaryImageId}`} alt="restraunt"/>
                        <h2>{restaurant.name}</h2>
                        <h3>{restaurant.cuisines.join(",  ")}</h3>
                        <h4>{restaurant.lastMileTravel} miles travelled</h4>
                </div>
        )
}



const AppLayout = () => {
        return (
                <>
                        <HeaderComponent />
                        <Body />
                        <Footer />
                </>
        )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);