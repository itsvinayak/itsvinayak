'use client';

import Image from 'next/image';
import Navlink from '@ui/Navlink';
import ThemeSwitcher from '@components/ThemeSwitcher';
import SearchPopup from '@components/SearchPopup';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';




const links = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
    { name: 'Connect', href: '/connect' },
];

const NavbarLogo = () => {
    return (
        <span className='py-4 text-2xl font-bold text-[#111010] dark:text-white'>
            <Image
                src='/profile.jpeg'
                alt='vinayak'
                width={40}
                height={40}
                className='rounded-full border border-neutral-200 dark:border-neutral-700 ml-4'
            />
            <span className='sr-only'>Logo</span>
        </span>
    );
};

const NavbarButton = ({ actionFunction, actionType }: any) => {
    return (
        <button
            className='focus:shadow-outline block rounded-lg px-4 text-2xl text-[#111010] transition duration-150 ease-in-out focus:outline-none dark:text-white'
            onClick={actionFunction}
        >
            {actionType ? (
                <span className='ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-8 top-6 z-50 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none '>
                    <FaTimes />
                    <span className='sr-only md:not-sr-only'>Close</span>
                </span>
            ) : (
                <span className='ring-offset-background focus:ring-ring data-[state=close]:bg-secondary absolute right-8 top-6 z-50 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none'>
                    <FaBars />
                    <span className='sr-only md:not-sr-only'>Open</span>
                </span>
            )}
        </button>
    );
};

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav = () => setShowNav(!showNav);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 z-40 flex w-screen items-center bg-white align-middle md:justify-center dark:bg-[#111010] ${isScrolled ? 'shadow-md' : ''
                }`}
        >
            <div className='flex w-screen flex-row justify-between align-middle md:hidden'>
                <NavbarLogo />
                <div className='flex flex-row items-center space-x-5 py-4 pr-5'>
                    <SearchPopup containerId='search-mobile-popup' />
                    <ThemeSwitcher />
                    <NavbarButton actionFunction={toggleNav} actionType={showNav} />
                </div>
            </div>
            <div className='hidden md:block'>
                <Navlink links={links} classNameProps={'flex flex-row'} />
            </div>
            <div className='hidden md:block ml-7 mt-7 mr-7 self-center'>
                <SearchPopup containerId='search-desktop-popup' />
            </div>
            <div className='hidden md:block mt-9 mr-7 self-center'>
                <ThemeSwitcher />
            </div>
            {showNav && (
                <button
                    className='fixed left-0 top-0 z-10 h-screen w-screen overflow-hidden bg-white md:hidden dark:bg-[#111010]'
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                >
                    <Navlink
                        links={links}
                        classNameProps={'flex flex-col m-10 text-lg'}
                    />
                </button>
            )}
        </nav>
    );
};

export default Navbar;
