'use client'

import React, { FC } from 'react'
import { DashboardMenu } from './data.dashboard'
import Link from 'next/link'
import { IDashboard } from './data.interface'

import NavItems from './NavItems'


const NavBar: FC = () => {



  return <div className='w-[350px] h-screen bg-[#10163a] fixed left-0 top-0  py-4'>
    <h1 className='text-center text-3xl text-[#43ced2] font-bold'>Kelishamiz</h1>

    <div className='overflow-y-scroll  h-full dashboard py-10' >
      {DashboardMenu.map((item) => {

        return (
          <>

            <NavItems item={item} />
          </>

        )
      })}
    </div>

  </div>
}

export default NavBar