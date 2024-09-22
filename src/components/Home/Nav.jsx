import { useState } from "react";
import Icon from "../Icon/Icon";

export default function Nav() {
    const [isNavActive, setIsNavActive] = useState(false);
    
    return (
        <div className='topNav fixed top-0 min-h-13 bg-black text-white font-rubik text-lg w-full z-[9999]'>
        <div className='py-4 px-16 grid justify-items-stretch grid-flow-col'>
          <div className='leftSideLogo justify-self-center mr-auto skew-x-[-10deg] text-2xl font-medium'><span className='text-[#ff004f]'>D</span>Varo.</div>
          <nav className={isNavActive ? "flex justify-self-end navActive mr-5 text-xl" : "flex justify-self-end mr-5 text-xl"}>
            <Icon name={isNavActive ? 'close' : 'menu'}
                className='block md:hidden justify-self-end cursor-pointer' onClick={() => setIsNavActive(!isNavActive)} >
            </Icon> 
          
          <ul className='hidden md:flex rightSideNavItems  justify-self-end mr-5 text-xl'>
              <li className='px-2 py-3 md:py-0'><a href="#intro" onClick={() => setIsNavActive(!isNavActive)} className='link nav pb-1 cursor-pointer'>Home</a></li>
              <li className='px-2 py-3 md:py-0'><a href="#about" onClick={() => setIsNavActive(!isNavActive)} className='link nav pb-1 cursor-pointer'>About</a></li>
              <li className='px-2 py-3 md:py-0'><a href="#projects" onClick={() => setIsNavActive(!isNavActive)} className='link nav pb-1 cursor-pointer'>Projects</a></li>
              <li className='px-2 py-3 md:py-0'><a href="#contact" onClick={() => setIsNavActive(!isNavActive)} className='link nav pb-1 cursor-pointer'>Contact</a></li>
              <li className='px-2 py-3 md:py-0'><a href="#resume" onClick={() => setIsNavActive(!isNavActive)} className='link nav pb-1 cursor-pointer'>Resume</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
}