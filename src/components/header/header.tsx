import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='absolute text-white top-[75px] w-full'>
            <div className='container'>
                <nav className={`flex justify-between items-center`}>
                    <Link href={'/'}>
                        <Image src={'/logo.svg'} alt='Лого' width={159} height={52} />
                    </Link>

                    <ul className={'flex gap-[35px]'}>
                        <li>
                            <Link href='/'>Обо мне</Link>
                        </li>
                        <li>
                            <Link href='/'>Навыки</Link>
                        </li>
                        <li>
                            <Link href='/'>Услуги</Link>
                        </li>
                        <li>
                            <Link href='/'>Портфолио</Link>
                        </li>
                        <li>
                            <Link href='/'>Отзывы</Link>
                        </li>
                        <li>
                            <Link href='/'>Контакты</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
        
    )
}

export default Header
