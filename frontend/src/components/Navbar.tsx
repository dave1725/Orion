import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/logo.png';
import { useState } from 'react';

const NavbarItem = ({title, classProps} : { title :string; classProps?: string}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={Logo} alt="logo" className='w-32 cursor-pointer'></img>
            </div>
            <ul className='text-black md:flex hidden list-none justify-between items-center flex-initial'>
                {['Exchange','Services','Tutorials','Wallets'].map((item,index) => (
                    <NavbarItem key={item+index} title={item}/>
                ))}
                <li className='bg-[black] p-2 rounded-full list-none cursor-pointer hover:bg-[black] text-[white] transition duration-5 ease-in-out'>Login</li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>{setToggleMenu(false)}}/>
                : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>{setToggleMenu(true)}}/>
                }
                {toggleMenu &&(
                    <ul
                        className='z-10 fixed top-0 right-0.5 p-3 h-screen shadow-2xl w-[60vw] blue-glassmorphism rounded-md flex flex-col items-end animate-slide-in'
                    >
                        <li className='my-2 w-full '>
                        <AiOutlineClose fontSize={20} className="cursor-pointer" onClick = {() => {setToggleMenu(false)}}/>
                        </li>
                        {['Exchange','Services','Tutorials','Wallets'].map((item,index) => (
                        <NavbarItem key={item+index} title={item} classProps='my-2 text-lg hover:text-white underline'/>
                ))}
                    </ul>
                )}
            </div>
        </nav>

    );
}

export default Navbar;