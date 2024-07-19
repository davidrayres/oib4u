'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import logo from '@/assets/images/logo-white.png'
import profileDefault from '@/assets/images/profile.png'
import {PiSignInLight} from 'react-icons/pi'
import {MdOutlineMenu} from 'react-icons/md'

export default function Navbar({user}) {
  const session = true //CHANGE WHEN AUTH IS INSTALLED
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className='text-white bg-blue-700 border-b border-blue-500'>
      <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-20'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* <!-- Mobile menu button --> */}
            <button className='relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={() => setIsMobileMenuOpen(prev => !prev)}>
              <MdOutlineMenu className='text-4xl' />
            </button>
          </div>

          <div className='flex items-center justify-center flex-1 md:justify-between'>
            {/* <!-- Logo --> */}
            <Link className='flex items-center flex-shrink-0' href='/'>
              <Image className='w-auto h-10' src={logo} alt='PropertyPulse' />
              <span className='hidden ml-2 text-2xl font-bold text-white md:block'>OIB | 86 W Second</span>
            </Link>

            {/* <!-- Desktop Menu (hidden below md screens) --> */}
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <>
                  <Link href='/oib' className={`${pathname === '/oib' ? 'navlink-active' : ''} navlink`}>
                    OIB Guide
                  </Link>
                  <Link href='/about' className={`${pathname === '/about' ? 'navlink-active' : ''} navlink`}>
                    Our Story
                  </Link>
                  <Link href='/contact' className={`${pathname === '/contact' ? 'navlink-active' : ''} navlink`}>
                    Contact Us
                  </Link>
                  <Link href='#' className='text-3xl'>
                    <PiSignInLight />
                  </Link>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id='mobile-menu'>
          <div className='flex flex-col px-2 pt-2 pb-3 space-y-1'>
            <>
              <Link href='/oib' className={`${pathname === '/oib' ? 'navlink-active' : ''} navlink`}>
                OIB Guide
              </Link>
              <Link href='/about' className={`${pathname === '/about' ? 'navlink-active' : ''} navlink`}>
                Our Story
              </Link>
              <Link href='/contact' className={`${pathname === '/contact' ? 'navlink-active' : ''} navlink`}>
                Contact Us
              </Link>
            </>
          </div>
        </div>
      )}
    </nav>
  )
}
