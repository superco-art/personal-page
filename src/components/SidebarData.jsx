import * as React from 'react'
import * as BiIcons from 'react-icons/bi';
import * as HiIcons from 'react-icons/hi';
import * as AiIcons from "react-icons/ai"

import "./NavBar.css"

export const SidebarData = [
    {
     title: 'Home',
     path: '/',
     icon: <BiIcons.BiHomeHeart />,
     cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <HiIcons.HiCode />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiOutlineFundProjectionScreen />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <HiIcons.HiOutlineMail />,
        cName: 'nav-text'
    },
]