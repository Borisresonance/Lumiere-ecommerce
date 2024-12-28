"use client"

import Image from 'next/image';
import Link from 'next/link';
import CartModal from './CartModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    //temporal
    const isLoggedIn = false 

    const router = useRouter();

    const handleProfile = () => {
        if(!isLoggedIn){
            router.push('/login');
        }
        setIsProfileOpen((prev)=>!prev);
    }
    return (
        <div className="flex items-center gap-4 xl:gap-6 relative"> 
            <Image src="/profile.png" alt="Search" width={22} height={22} className='cursor-pointer'
            onClick={handleProfile}//handle function will open and close the profile options
            />

            {isProfileOpen && (
                <div className='absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
                    <Link href="/">Profile</Link>
                    <div className='mt-2 cursor-pointer'>Logout</div>
                </div>)}
            <Image src="/notification.png" alt="Search" width={22} height={22} className='cursor-pointer'/>

            <div className='relative cursor-pointer'>
                <Image 
                    src="/cart.png" 
                    alt="Search" 
                    width={22} 
                    height={22} 
                    className='cursor-pointer'
                    onClick={() => setIsCartOpen((prev)=> !prev)}
            />
            <div className='absolute -top-4 -right-4 w-6 h-6 bg-salmon rounded-full text-white text-sm items-center justify-center flex'>2

            </div>
            {isCartOpen && <CartModal/>} 
            </div>
            

            
        </div>
    );
};

export default NavIcons;