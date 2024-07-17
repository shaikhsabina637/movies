import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
    const [showNavStatus, setShowNavStatus] = useState(false);
    
    const showNav = () => {
        setShowNavStatus(true);
    }

    const closeNav = () => {
        setShowNavStatus(false);
    }

    return (
        <>
            <nav className='flex justify-evenly items-center relative xs:gap-1'>
                <div className='flex xs:w-[35vw] lg:w-[20vw] md:w-[28vw] sm:w-[35vw] xs:py-1 lg:py-0'>
                    <div className='lg:px-2 lg:py-1 border-4 m-2 text-2xl border-blue-400 xs:px-2 md:px-3 md:py-4 sm:px-3 sm:py-2 flex justify-center items-center '>
                        <p className='italic font-bold text-custom_blue text-center capitalize'>m</p>
                    </div>
                    <div className='m-2 italic '>
                        <p className='font-bold lg:text-2xl xs:text-sm md:text-lg sm:text-2xl'>
                           mov<span className='text-blue-400 font-bold md:text-lg md:mt-4 '>ies</span>
                        </p>
                        <p className='capitalize lg:text-[16px] text-gray-400 xs:text-sm sm:text-[11px] xs:text-[6px] xs:w-[30vw]'>
                            your entertainment, our responsibility
                        </p>
                    </div>
                </div>

                <div className='flex justify-between gap-5 text-xl items-center md:hidden lg:block xs:hidden sm:hidden'>
                    <ul className='flex justify-between items-center lg:gap-10 capitalize'>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                          home
                        </li>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                            about us
                        </li>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                            all movies
                        </li>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                            contact us
                        </li>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                           log in
                        </li>
                    </ul>
                </div>

                {showNavStatus ? 
                    <p className='text-2xl md:block lg:hidden sm:block xs:block'>
                        <ImCross onClick={closeNav} />
                    </p> 
                    : 
                    <p className='text-2xl md:block lg:hidden sm:block xs:block'>
                        <FaBars onClick={showNav} />
                    </p>
                }

                {showNavStatus &&
                    <ul className='flex justify-between bg-blue-200 z-20 items-center absolute right-0 top-20 flex-col lg:gap-10 gap-5 capitalize w-full py-4'>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                            home
                        </li>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                            about
                        </li>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                            all movies
                        </li>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                            contact us
                        </li>
                        <li className='p-2 bg-blue-300 rounded-lg capitalize text-sm'>
                            log in
                        </li>
                    </ul>
                }
            </nav>
        </>
    );
}

export default Navbar;
