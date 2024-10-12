import React from "react"
import Home from "./pages/Home/Home"
import ContactUs from "./pages/ContactUs/ContactUs"
import Vojohat from "./pages/Vojohat/Vojohat"

const routes = [
    {path: "/", element: React.createElement(Home)},
    {path: "/contact-us", element: React.createElement(ContactUs)},
    {path: "/vojohat-payment", element: React.createElement(Vojohat)},
]

export default routes