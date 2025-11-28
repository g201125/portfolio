'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    // Handle scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = [
        { label: 'Обо мне', href: '#about' },
        { label: 'Навыки', href: '#skills' },
        { label: 'Услуги', href: '#services' },
        { label: 'Портфолио', href: '#portfolio' },
        { label: 'Отзывы', href: '#reviews' },
        { label: 'Контакты', href: '#contacts' },
    ]

    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}
            `}
        >
            <div className="container mx-auto px-4 relative z-10">
                <nav className="flex justify-between items-center">
                    <Link href="/" className="relative z-50">
                        <Image
                            src="/logo.svg"
                            alt="Лого"
                            width={159}
                            height={52}
                            className={`transition-all duration-300 ${scrolled ? 'w-[100px]' : 'w-[120px] md:w-[159px]'} h-auto`}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 items-center">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="text-white/90 hover:text-[#2352DE] transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-8 h-[2px] bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-8 h-[2px] bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                        <span className={`block w-8 h-[2px] bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>

                    {/* Mobile Menu Overlay */}
                    <div
                        className={`
                            fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center
                            transition-all duration-500 ease-in-out md:hidden
                            ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                        `}
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[100px]" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600 blur-[100px]" />
                        </div>

                        <ul className="flex flex-col gap-8 text-center relative z-10">
                            {menuItems.map((item, index) => (
                                <li
                                    key={item.label}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                    className={`transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="text-3xl font-bold text-white hover:text-[#2352DE] transition-colors duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header
