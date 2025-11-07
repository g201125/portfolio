import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#343740] flex justify-center items-center py-[50px]'>
      <Link href='/'>
        <Image src={'/logo.svg'} alt='logo' width={159} height={53} />
      </Link>
    </footer>
  )
}

export default Footer