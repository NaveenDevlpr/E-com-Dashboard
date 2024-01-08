'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {IoIosArrowBack} from 'react-icons/io'
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { RxDashboard } from "react-icons/rx"
import { navlinks } from '@/types/types'
import Link from 'next/link'
import { MdLeaderboard } from "react-icons/md"
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

type Props = {}



const SideBar = (props: Props) => {

    let isTab=useMediaQuery({query: '(max-width:768px)' })
    
    const [isOpen,setOpen]=useState(isTab?false:true)
    const [active,setActive]=useState<number>(0)
    

    const links:navlinks[]=[
       {
        id:1,
        name:'Overview',
        link:'/',
        icon:MdLeaderboard
       },
       {
        id:2,
        name:'Sales',
        link:'/sales',
        icon:MdOutlineAttachMoney
       },
       {
        id:3,
        name:'Revenue',
        link:'/revenue',
        icon:FaChartLine
       },
       {
        id:4,
        name:'Settings',
        link:'/settings',
        icon:IoMdSettings
       },
    ]

    const Sidebar_animation=isTab?{
        open:{
            x:0,
            width: "16rem",
            transition:{
                damping:"40"
            }
        },
        closed:{
            x:-250,
            width: "0",
            transition:{
                damping:"40",
                delay:0.15
            }
        }
    }:{
        open:{
            width: "16rem",
            transition:{
                damping:"40"
            }
        },
        closed:{
            width: "4rem",
            transition:{
                damping:"40"
            }
        }
    }


    useEffect(()=>{
        if(isTab){
            setOpen(false)
        }
        else{
            setOpen(true)
        }


        const storedActiveLink = localStorage.getItem('activeLinkIndex');
    if (storedActiveLink !== null) {
      setActive(parseInt(storedActiveLink, 10));
    }
        
    },[isTab])
   

    const handleLinkClick = (index: number) => {
        setActive(index);
      
        localStorage.setItem('activeLinkIndex', index.toString());
      };
  return (
   <div className=''>

    <div 
    onClick={()=>setOpen(false)}
    className={`z-[998] bg-black/50 md:hidden inset-0 fixed max-h-screen transition-all duration-700 ${isOpen?'block':'hidden'}`}>

    </div>
        <motion.div variants={Sidebar_animation}
        initial={{x:isTab?-250:0}}
        animate={isOpen?"open":"closed"}
        className={` bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] 
        overflow-hidden md:relative fixed
        h-screen`}>


            <div className={`flex items-center gap-2.5 font-semibold py-3 mx-3.5 overflow-x-hidden`}>
                <RxDashboard className='w-7 h-7 min-w-max text-center'/>
                <span className='text-2xl text black whitespace-pre'>Dashboard</span>
            </div>

            <div className='flex flex-col h-full mt-5'>
                <ul className='flex flex-col px-2.5 text-[1rem] space-y-5 font-medium overflow-x-hidden'>
                    {
                        links.map((link,index)=>(
                            <Link key={link.id} href={link.link}
                            className={`p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium ${active===index?'bg-[#cb0c9f] text-[#f3edf2]':''}`}
                            onClick={()=>handleLinkClick(index)}
                            >
                                <span className='min-w-max'>{React.createElement(link.icon,{size:'1.5rem'})}</span>
                                <li key={link.id}>{link.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>

            <motion.div 
            animate={
                isOpen?{
                    x:0,y:0,rotate:0
                }:{
                    x:10,y:350,rotate:180
                }
            }
            transition={{duration:0}}
            onClick={()=>setOpen(!isOpen)}
            className='absolute w-fit h-fit z-50 right-2 top-3 cursor-pointer md:block hidden'>
                <IoIosArrowBack size={25}/>
            </motion.div>
        </motion.div>
        <div className='m-3 md:hidden cursor-pointer'
        onClick={()=>setOpen(true)}
        >
            <MdMenu size={25}/>
        </div>
   </div>
  )
}

export default SideBar