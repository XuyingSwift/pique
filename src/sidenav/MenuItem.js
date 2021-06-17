import {AiOutlineDashboard} from 'react-icons/ai'
import {BsBarChart} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'
import {RiProjectorLine} from 'react-icons/ri'
import {CgListTree} from 'react-icons/cg'
import React from 'react';

export const MenuItemList = [
    {
        title: 'Dashboard',
        path:'/',
        icon: <AiOutlineDashboard/>
    },
    {
        title: 'Pique Tree',
        path: '/piquetree',
        icon: <CgListTree/>
    },
    {
        title: 'Visualize',
        path:'/visualize',
        icon: <BsBarChart/>
    },
    {
        title: 'Projects',
        path:'/projects',
        icon: <RiProjectorLine/>
    },
    {
        title: 'Settings',
        path:'/settings',
        icon: <AiOutlineSetting/>
    }
]
