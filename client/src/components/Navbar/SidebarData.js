import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SlIcons from "react-icons/sl";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'SignUp',
        path: '/signup',
        icon: <BsIcons.BsFillPersonPlusFill />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <SlIcons.SlLogin />,
        cName: 'nav-text'
    },
    {
        title: 'OrderHistory',
        path: '/orderhistory',
        icon: <AiIcons.AiOutlineHistory />,
        cName: 'nav-text'
    },

]