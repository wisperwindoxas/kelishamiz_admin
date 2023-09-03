import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { FC } from 'react'
import { IDashboard } from './data.interface'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { ImArrowRight } from 'react-icons/im'

const NavItems: FC<{ item: IDashboard }> = ({ item }) => {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <Link onClick={() => setShowMenu(!showMenu)} href={"#"} className='py-2 w-full   px-5 flex gap-4 border border-transparent text-white items-center'>


      <div className='w-full'>
        <p className=' flex  items-center w-full hover:bg-slate-500 hover:rounded-r-full transition-all '>{<item.icons className='w-10' />} <span className=' w-full flex items-center p-2 justify-between'>{item.title_uz}   <span >{item.podCategories.length > 0 ? <AiOutlineArrowDown className={showMenu ? "transform rotate-180 transition-transform" : "transform rotate-0 transition-transform"} /> : ""}</span></span></p>
        {item.podCategories.length > 0 &&
          <ul className={`flex flex-col gap-4 px-8 overflow-hidden ${showMenu ? "h-auto transition-all  duration-200" : "h-0 transition-all duration-200  p-0"}`}>

            {item.podCategories.map((item) => {
              return <li className='p-2 hover:bg-slate-500 flex items-center gap-10'><ImArrowRight /> {item}</li>
            })}

          </ul>
        }
      </div>

    </Link>
  )
}

export default NavItems