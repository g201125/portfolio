'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="absolute z-[1000] text-white top-[75px] w-full">
            <div className="container">
                <nav className="flex justify-between items-center">

                 
                    <Link href="/">
                        <Image src="/logo.svg" alt="Лого" width={159} height={52} />
                    </Link>

                  
                    <button
                        className="md:hidden flex flex-col gap-[4px]"
                        onClick={() => setOpen(!open)}
                    >
                        <span className="block w-6 h-[2px] bg-white"></span>
                        <span className="block w-6 h-[2px] bg-white"></span>
                        <span className="block w-6 h-[2px] bg-white"></span>
                    </button>

                 
                    <ul
                        className={`
                            flex gap-[35px] 
                            md:flex 
                            ${open ? 'flex' : 'hidden'} 
                            flex-col md:flex-row 
                            absolute md:static 
                            top-[70px] right-0 
                            bg-black/80 md:bg-transparent 
                            p-5 md:p-0 
                            w-[200px] md:w-auto 
                            rounded-md md:rounded-none
                        `}
                    >
                        <li><Link href="/">Обо мне</Link></li>
                        <li><Link href="/">Навыки</Link></li>
                        <li><Link href="/">Услуги</Link></li>
                        <li><Link href="/">Портфолио</Link></li>
                        <li><Link href="/">Отзывы</Link></li>
                        <li><Link href="/">Контакты</Link></li>
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default Header
