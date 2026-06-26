'use client';

import Image from 'next/image';
import Navlink from '@ui/Navlink';
import ThemeSwitcher from '@components/ThemeSwitcher';
import SearchPopup from '@components/SearchPopup';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';




const links = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
    { name: 'Connect', href: '/connect' },
];

const NavbarLogo = () => {
    return (
        <span className='inline-flex items-center text-2xl font-bold text-[#111010] dark:text-white'>
            <Image
                src='/profile.jpeg'
                alt='vinayak'
                width={40}
                height={40}
                className='ml-1 rounded-full border border-neutral-200 dark:border-neutral-700'
            />
            <span className='sr-only'>Logo</span>
        </span>
    );
};

const NavbarButton = ({ actionFunction, actionType }: any) => {
    return (
        <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/80 bg-white/80 text-zinc-800 shadow-sm backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white active:scale-95 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:bg-zinc-900'
            onClick={actionFunction}
            aria-label={actionType ? 'Close menu' : 'Open menu'}
        >
            {actionType ? <FaTimes className='text-sm' /> : <FaBars className='text-sm' />}
        </button>
    );
};

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const toggleNav = () => setShowNav(!showNav);
    const closeNav = () => setShowNav(false);

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

    useEffect(() => {
        closeNav();
    }, [pathname]);

    useEffect(() => {
        if (!showNav) {
            document.body.style.overflow = '';
            return;
        }

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeNav();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showNav]);

    return (
        <nav
            className={`fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-[#111010]/75 ${isScrolled ? 'shadow-md shadow-zinc-200/40 dark:shadow-black/30' : ''
                }`}
        >
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:hidden overflow-hidden">
                <div className='flex items-center'>
                    <NavbarLogo />
                </div>
                <div className='flex items-center gap-2'>
                    <SearchPopup containerId='search-mobile-popup' />
                    <ThemeSwitcher />
                    <NavbarButton actionFunction={toggleNav} actionType={showNav} />
                </div>
            </div>

            <div className='mx-auto hidden h-20 w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 md:grid'>
                <div className='flex items-center justify-start'>
                    <NavbarLogo />
                </div>

                <div className='flex items-center justify-center'>
                    <Navlink links={links} classNameProps={'flex items-center gap-1'} />
                </div>

                <div className='flex items-center justify-end gap-2'>
                    <SearchPopup containerId='search-desktop-popup' />
                    <ThemeSwitcher />
                </div>
            </div>

            {showNav && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Background */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={closeNav}
                    />

                    {/* Menu */}
                    <div className="relative flex h-screen w-full flex-col bg-white dark:bg-[#111010]">

                        {/* Top Bar */}
                        <div className="flex h-16 items-center justify-between border-b border-zinc-200 px-4 dark:border-zinc-800">
                            <NavbarLogo />

                            <div className="flex items-center gap-2">
                                <SearchPopup containerId="search-mobile-popup" />
                                <ThemeSwitcher />
                                <NavbarButton
                                    actionFunction={closeNav}
                                    actionType={true}
                                />
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-1 flex-col px-6 py-8">
                            <Navlink
                                links={links}
                                classNameProps="block rounded-xl px-4 py-4 text-xl font-semibold text-zinc-900 transition dark:text-white"
                                onLinkClick={closeNav}
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
