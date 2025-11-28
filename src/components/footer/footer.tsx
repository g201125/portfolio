import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#343740] flex justify-center items-center py-8 md:py-[50px]">
      <Link href="/" className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={159}
          height={53}
          className="w-[120px] md:w-[159px] h-auto"
        />
      </Link>
    </footer>
  )
}

export default Footer
